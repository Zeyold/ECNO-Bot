/**
 * Localisation centralisée des éléments d'interface Discord.
 * Les identifiants techniques (noms de commandes, customId, variables, URLs)
 * ne passent jamais par ce module : seuls les textes affichés sont concernés.
 */
import {
  EmbedBuilder,
  ButtonBuilder,
  ModalBuilder,
  TextInputBuilder,
  StringSelectMenuBuilder,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandGroupBuilder,
  SlashCommandStringOption,
  SlashCommandIntegerOption,
  SlashCommandNumberOption,
  SlashCommandBooleanOption,
  SlashCommandUserOption,
  SlashCommandChannelOption,
  SlashCommandRoleOption,
  SlashCommandMentionableOption,
  SlashCommandAttachmentOption,
} from 'discord.js';

const translations = new Map([
  ['Yes', 'Oui'], ['No', 'Non'], ['Cancel', 'Annuler'], ['Confirm', 'Confirmer'],
  ['Close', 'Fermer'], ['Delete', 'Supprimer'], ['Remove', 'Retirer'], ['Back', 'Retour'],
  ['Refresh', 'Actualiser'], ['Save', 'Enregistrer'], ['Create', 'Créer'], ['Update', 'Mettre à jour'],
  ['Enable', 'Activer'], ['Disable', 'Désactiver'], ['Enabled', 'Activé'], ['Disabled', 'Désactivé'],
  ['Pause', 'Mettre en pause'], ['Resume', 'Reprendre'], ['Stop', 'Arrêter'], ['Skip', 'Passer'],
  ['Shuffle', 'Mélanger'], ['Loop', 'Boucle'], ['Queue', 'File d’attente'], ['Claim', 'Prendre en charge'],
  ['Claimed', 'Pris en charge'], ['Unclaim', 'Ne plus prendre en charge'], ['Pin', 'Épingler'],
  ['Low', 'Faible'], ['High', 'Élevée'], ['View', 'Voir'], ['Join', 'Participer'],
  ['Reroll', 'Tirer à nouveau'], ['End', 'Terminer'], ['Add Comment', 'Ajouter un commentaire'],
  ['No thanks', 'Non merci'], ['Reopen Ticket', 'Rouvrir le ticket'], ['Delete Ticket', 'Supprimer le ticket'],
  ['Permission Denied', 'Permission refusée'], ['Configuration Error', 'Erreur de configuration'],
  ['Unknown subcommand', 'Sous-commande inconnue'], ['Dashboard Timed Out', 'Tableau de bord expiré'],
  ['Current Settings', 'Paramètres actuels'], ['Next', 'Suivant'], ['Previous', 'Précédent'],
  ['Page', 'Page'], ['Status', 'État'], ['Total', 'Total'], ['Date', 'Date'], ['Time', 'Heure'],
  ['User', 'Utilisateur'], ['Channel', 'Salon'], ['Role', 'Rôle'], ['Reason', 'Raison'],
  ['Settings', 'Paramètres'], ['Configuration', 'Configuration'], ['Success', 'Succès'],
  ['Error', 'Erreur'], ['Warning', 'Avertissement'], ['Support Server', 'Serveur d’assistance'],
  ['Report Bug', 'Signaler un bug'], ['Welcome Channel', 'Salon de bienvenue'],
  ['Welcome Message', 'Message de bienvenue'], ['Welcome System Configured', 'Système de bienvenue configuré'],
  ['Birthday Set!', 'Anniversaire enregistré !'], ['Birthday Removed', 'Anniversaire supprimé'],
  ['No Birthday Found', 'Aucun anniversaire trouvé'], ['No Birthdays', 'Aucun anniversaire'],
  ['Birthday Information', 'Informations d’anniversaire'], ['Server Birthdays', 'Anniversaires du serveur'],
  ['No Upcoming Birthdays', 'Aucun anniversaire à venir'], ['Next 5 Upcoming Birthdays', 'Les 5 prochains anniversaires'],
  ['Add Task', 'Ajouter une tâche'], ['Complete Task', 'Terminer une tâche'], ['Remove Task', 'Retirer une tâche'],
  ['Add Task to Shared List', 'Ajouter une tâche à la liste partagée'],
  ['Complete Task in Shared List', 'Terminer une tâche dans la liste partagée'],
  ['Remove Task from Shared List', 'Retirer une tâche de la liste partagée'],
  ['Create a Ticket', 'Créer un ticket'], ['Close Ticket', 'Fermer le ticket'],
  ['Logging Dashboard', 'Tableau de bord des journaux'], ['Event Categories', 'Catégories d’événements'],
  ['Log Ignore Filters', 'Filtres d’exclusion des journaux'], ['Audit Logging', 'Journalisation d’audit'],
  ['Application Retention Periods', 'Périodes de conservation des candidatures'],
  ['Remove Application Role', 'Retirer le rôle de candidature'], ['Application Deleted', 'Candidature supprimée'],
  ['Ticket Not Found', 'Ticket introuvable'], ['Not Allowed', 'Non autorisé'],
  ['Already Submitted', 'Déjà envoyé'], ['Invalid Feedback Link', 'Lien d’avis invalide'],
  ['Thanks for your feedback!', 'Merci pour votre avis !'], ['No problem!', 'Pas de problème !'],
  ['Google Search Results', 'Résultats de recherche Google'], ['No users on the leaderboard yet!', 'Aucun utilisateur au classement pour le moment !'],
  ['Pinging...', 'Calcul de la latence…'], ['Unknown option.', 'Option inconnue.'],
  ['Unknown dashboard action.', 'Action du tableau de bord inconnue.'],
  ['Invalid event type.', 'Type d’événement invalide.'], ['Invalid filter type.', 'Type de filtre invalide.'],
  ['This ticket has been closed.', 'Ce ticket a été fermé.'],
  ['You have claimed this ticket.', 'Vous avez pris ce ticket en charge.'],
  ['This ticket has been unclaimed.', 'Ce ticket n’est plus pris en charge.'],
  ['This ticket will be deleted shortly.', 'Ce ticket sera bientôt supprimé.'],
]);

const replacements = [
  ['Configure the welcome system', 'Configurer le système de bienvenue'],
  ['Set up the welcome message', 'Configurer le message de bienvenue'],
  ['The channel to send welcome messages to', 'Le salon où envoyer les messages de bienvenue'],
  ['Welcome message. Variables:', 'Message de bienvenue. Variables :'],
  ['Whether to ping the user in the welcome message', 'Indiquer si l’utilisateur doit être mentionné dans le message de bienvenue'],
  ['You need the **Manage Server** permission', 'Vous avez besoin de la permission **Gérer le serveur**'],
  ['Please try again.', 'Veuillez réessayer.'], ['An error occurred', 'Une erreur est survenue'],
  ['No channel provided', 'Aucun salon fourni'], ['has been disabled', 'a été désactivé'],
  ['has been enabled', 'a été activé'], ['will now be sent to', 'seront désormais envoyés dans'],
  ['will now be posted in', 'seront désormais publiées dans'],
  ['No birthdays have been set', 'Aucun anniversaire n’a été enregistré'],
  ['No upcoming birthdays found', 'Aucun anniversaire à venir trouvé'],
  ['Your birthday has been set to', 'Votre anniversaire a été enregistré au'],
  ['Your birthday has been successfully removed from the server.', 'Votre anniversaire a bien été supprimé du serveur.'],
  ['You don\'t have a birthday set to remove.', 'Vous n’avez aucun anniversaire enregistré à supprimer.'],
  ['Select a setting to configure...', 'Sélectionnez un paramètre à configurer…'],
  ['Select a configuration option', 'Sélectionnez une option de configuration'],
  ['Choose a setting to configure…', 'Choisissez un paramètre à configurer…'],
  ['Select a text channel...', 'Sélectionnez un salon textuel…'],
  ['Select a moderator role...', 'Sélectionnez un rôle de modération…'],
  ['Pick a name template...', 'Choisissez un modèle de nom…'],
  ['Enter a number between', 'Saisissez un nombre entre'],
  ['Type your new template in the chat below', 'Saisissez votre nouveau modèle dans le chat ci-dessous'],
  ['This action cannot be undone', 'Cette action est irréversible'],
  ['Configuration session expired.', 'La session de configuration a expiré.'],
  ['Run the command again to make changes.', 'Relancez la commande pour effectuer des modifications.'],
  ['Only the ticket creator can submit feedback for this ticket.', 'Seul le créateur du ticket peut envoyer un avis pour ce ticket.'],
  ['Thank you for your feedback!', 'Merci pour votre avis !'],
  ['Thank you for using our support system.', 'Merci d’utiliser notre système d’assistance.'],
  ['You can always reach out again if you need further support.', 'Vous pourrez nous recontacter si vous avez besoin d’aide.'],
  ['React with the button below to enter!', 'Cliquez sur le bouton ci-dessous pour participer !'],
  ['No users on the leaderboard yet!', 'Aucun utilisateur au classement pour le moment !'],
  ['Manage server logging', 'Gérer la journalisation du serveur'],
  ['Open the logging dashboard', 'Ouvrir le tableau de bord des journaux'],
  ['Manage Join to Create voice channels system.', 'Gérer le système de salons vocaux « Rejoindre pour créer ».'],
  ['View bot statistics', 'Voir les statistiques du bot'], ['Check how long the bot has been online', 'Voir depuis combien de temps le bot est en ligne'],
  ['Checks the bot\'s latency and API speed', 'Vérifier la latence du bot et la vitesse de l’API'],
  ['Get link to the support server', 'Obtenir le lien du serveur d’assistance'],
  ['Manage the server counting game', 'Gérer le jeu de comptage du serveur'],
  ['Start a counting game in a text channel', 'Démarrer un jeu de comptage dans un salon textuel'],
  ['Disable the counting game for this server', 'Désactiver le jeu de comptage pour ce serveur'],
  ['View current counting game status', 'Voir l’état actuel du jeu de comptage'],
  ['Reset the current counting sequence', 'Réinitialiser la suite de comptage actuelle'],
  ['Show the counting game leaderboard', 'Afficher le classement du jeu de comptage'],
  ['Manage server statistics that track member counts and channel data', 'Gérer les statistiques du serveur (membres et salons)'],
  ['Create a new statistics tracker channel in a category', 'Créer un salon de suivi statistique dans une catégorie'],
  ['List all statistics trackers for this server', 'Lister tous les suivis statistiques de ce serveur'],
  ['Update an existing statistics tracker', 'Mettre à jour un suivi statistique existant'],
  ['Delete an existing statistics tracker', 'Supprimer un suivi statistique existant'],
  ['Starts a new giveaway in a specified channel.', 'Lancer un nouveau concours dans le salon indiqué.'],
  ['Rerolls the winner(s) for an ended giveaway.', 'Tirer de nouveau le ou les gagnants d’un concours terminé.'],
  ['The message ID of the ended giveaway.', 'L’identifiant du message du concours terminé.'],
  ['The message ID of the giveaway to end.', 'L’identifiant du message du concours à terminer.'],
  ['The message ID of the giveaway to delete.', 'L’identifiant du message du concours à supprimer.'],
  ['The number of winners to pick.', 'Le nombre de gagnants à tirer.'],
  ['The prize being given away.', 'Le lot à faire gagner.'],
  ['Manage user notes for moderation purposes', 'Gérer les notes utilisateur pour la modération'],
  ['View all warnings for a user', 'Voir tous les avertissements d’un utilisateur'],
  ['Warn a user', 'Avertir un utilisateur'], ['Ban a user from the server', 'Bannir un utilisateur du serveur'],
  ['Unban a user from the server', 'Débannir un utilisateur du serveur'],
  ['Kick a user from the server', 'Expulser un utilisateur du serveur'],
  ['Remove timeout from a user', 'Retirer l’exclusion temporaire d’un utilisateur'],
  ['Timeout a user for a specific duration.', 'Exclure temporairement un utilisateur pour une durée donnée.'],
  ['Delete a specific amount of messages', 'Supprimer un nombre défini de messages'],
  ['Send a plain message as the bot', 'Envoyer un message simple en tant que bot'],
  ['View moderation cases and audit logs', 'Voir les cas de modération et les journaux d’audit'],
  ['Manage the server configuration dashboard and setup wizard', 'Ouvrir le tableau de bord et l’assistant de configuration du serveur'],
  ['Displays the help menu with all available commands', 'Afficher le menu d’aide avec toutes les commandes disponibles'],
  ['Manage server logging — channels, filters, and event categories.', 'Gérer la journalisation du serveur : salons, filtres et catégories d’événements.'],
  ['Set up a new Join to Create voice channel.', 'Configurer un nouveau salon vocal « Rejoindre pour créer ».'],
  ['Configure an existing Join to Create system.', 'Configurer un système « Rejoindre pour créer » existant.'],
  ['The user to ban', 'L’utilisateur à bannir'], ['The user to kick', 'L’utilisateur à expulser'],
  ['User to warn', 'L’utilisateur à avertir'], ['User to timeout', 'L’utilisateur à exclure temporairement'],
  ['Reason for the ban', 'Raison du bannissement'], ['Reason for the kick', 'Raison de l’expulsion'],
  ['Reason for the warning', 'Raison de l’avertissement'], ['Reason for the timeout', 'Raison de l’exclusion temporaire'],
  ['The channel where counting will take place', 'Le salon où le comptage aura lieu'],
  ['The number to start at after reset', 'Le nombre de départ après la réinitialisation'],
  ['The type of statistics to track', 'Le type de statistique à suivre'],
  ['The category where the statistics tracker channel will be created', 'La catégorie dans laquelle le salon de suivi sera créé'],
  ['The ID of the tracker to delete', 'L’identifiant du suivi à supprimer'],
  ['The ID of the tracker to update', 'L’identifiant du suivi à mettre à jour'],
  ['The text channel for logs.', 'Le salon textuel destiné aux journaux.'],
  ['The text channel for announcements. Leave empty to disable.', 'Le salon textuel pour les annonces. Laissez vide pour désactiver.'],
];

/** Traduit uniquement les fragments intégrés par le bot, sans modifier les identifiants Discord. */
export function localizeText(value) {
  if (typeof value !== 'string' || !value) return value;
  let translated = translations.get(value) ?? value;
  for (const [english, french] of replacements) translated = translated.replaceAll(english, french);
  return translated;
}

function patchTextMethod(Class, method) {
  const original = Class?.prototype?.[method];
  if (!original || original.__frenchLocalized) return;
  const localized = function (value, ...rest) { return original.call(this, localizeText(value), ...rest); };
  localized.__frenchLocalized = true;
  Class.prototype[method] = localized;
}

function patchFooter() {
  const original = EmbedBuilder.prototype.setFooter;
  EmbedBuilder.prototype.setFooter = function (footer) {
    return original.call(this, footer?.text ? { ...footer, text: localizeText(footer.text) } : footer);
  };
}

function localizeComponentOption(option) {
  if (!option || typeof option !== 'object') return option;
  return {
    ...option,
    ...(typeof option.label === 'string' ? { label: localizeText(option.label) } : {}),
    ...(typeof option.description === 'string' ? { description: localizeText(option.description) } : {}),
  };
}

function patchOptions() {
  const original = StringSelectMenuBuilder.prototype.addOptions;
  StringSelectMenuBuilder.prototype.addOptions = function (...options) {
    return original.call(this, ...options.map(option => Array.isArray(option)
      ? option.map(localizeComponentOption)
      : localizeComponentOption(option)));
  };
}

function patchEmbedFields() {
  const original = EmbedBuilder.prototype.addFields;
  EmbedBuilder.prototype.addFields = function (...fields) {
    return original.call(this, ...fields.map(field => Array.isArray(field)
      ? field.map(item => ({ ...item, name: localizeText(item.name), value: localizeText(item.value) }))
      : { ...field, name: localizeText(field.name), value: localizeText(field.value) }));
  };
}

/** Active la traduction pour tous les composants créés après l’appel. */
export function enableFrenchLocalization() {
  [EmbedBuilder, ModalBuilder].forEach(Class => patchTextMethod(Class, 'setTitle'));
  [EmbedBuilder].forEach(Class => patchTextMethod(Class, 'setDescription'));
  [ButtonBuilder, TextInputBuilder].forEach(Class => patchTextMethod(Class, 'setLabel'));
  [TextInputBuilder, StringSelectMenuBuilder].forEach(Class => patchTextMethod(Class, 'setPlaceholder'));
  [SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder,
    SlashCommandStringOption, SlashCommandIntegerOption, SlashCommandNumberOption,
    SlashCommandBooleanOption, SlashCommandUserOption, SlashCommandChannelOption,
    SlashCommandRoleOption, SlashCommandMentionableOption, SlashCommandAttachmentOption]
    .forEach(Class => patchTextMethod(Class, 'setDescription'));
  patchFooter();
  patchOptions();
  patchEmbedFields();
}
