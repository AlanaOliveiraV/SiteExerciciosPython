function showSolution(solutionId) {
            var solutionDiv = document.getElementById(solutionId);
            if (solutionDiv.style.display === "none" || solutionDiv.style.display === "") {
                solutionDiv.style.display = "block";
            } else {
                solutionDiv.style.display = "none";
            }
        }