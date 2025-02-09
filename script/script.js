document.addEventListener("DOMContentLoaded", function() {
    // Certifique-se de que o formulário tenha o id correto
    const leadForm = document.getElementById("leadForm");

    // Adiciona o evento submit ao formulário
    leadForm.addEventListener("submit", async function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Obtém os valores dos campos de entrada
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Verifica se ambos os campos foram preenchidos
        if (!name || !email) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        try {
            // Envia os dados para o Zapier
            const response = await fetch("https://hooks.zapier.com/hooks/catch/21637095/2aacg9h/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email })
            });

            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                leadForm.reset(); // Limpa o formulário após o envio
            } else {
                throw new Error("Erro ao cadastrar. Tente novamente!");
            }
        } catch (error) {
            alert(error.message); // Exibe o erro se ocorrer
        }
    });
});
