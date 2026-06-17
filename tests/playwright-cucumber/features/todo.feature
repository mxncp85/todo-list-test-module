Feature: Gestion des tâches

    Background:
        Given Je suis sur la page de la todo list

    Scenario: Ajouter une tâche
        When j'ajoute une tâche "Je veux faire un test"
        And j'appuie sur le bouton "Ajouter"
        Then la tâche "Je veux faire un test" est ajoutée

    Scenario: Supprimer une tâche
        Given une tâche "À supprimer" existe
        When je supprime la tâche "À supprimer"
        Then la tâche "À supprimer" n'est plus visible

    Scenario: Marquer une tâche comme terminée
        Given une tâche "À terminer" existe
        When je coche la tâche "À terminer"
        Then la tâche "À terminer" est marquée comme terminée

    Scenario: Filtrer les tâches actives
        Given une tâche "Tâche active" existe
        And une tâche "Tâche terminée" existe
        And je coche la tâche "Tâche terminée"
        When je filtre sur "À faire"
        Then la tâche "Tâche active" est visible
        And la tâche "Tâche terminée" n'est plus visible

    Scenario: Filtrer les tâches terminées
        Given une tâche "Encore active" existe
        And une tâche "Déjà terminée" existe
        And je coche la tâche "Déjà terminée"
        When je filtre sur "Terminées"
        Then la tâche "Déjà terminée" est visible
        And la tâche "Encore active" n'est plus visible