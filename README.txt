Chrome extension to remove gender from pronouns and other terms throughout web browsing.

It also adds a "toggle gender" browser action button that reloads the current tab and pauses/unpauses the extension.

This is a fork of [Jailbreak the Patriarchy](https://github.com/DanielleSucher/Jailbreak-the-Patriarchy). Check out that plugin
if you would rather binary genders be swapped. All credit goes to [DanielleSucher](DanielleSucher) for doing the groundwork for this plugin.

***

Known issues:

- Since "her" can be a possessive or objective pronoun, sometimes “her” should translate to “them”, and sometimes it should translate to “their”. Rather than run every node update through some sort of natural language parser, I set up regular expressions with a set of rules that recognize the most common cases where “her” always or usually should translate to “them”, and then one that translates all remaining instances of “her” to “their” instead. What this ultimately means is that sometimes you’re going to see “their” where you really ought to see “them” instead, or vice-versa. Please submit issues when you find examples that break this

- It doesn't include words like "mum", "fellow", "mister", &c, that are often used in entirely non-gendered ways (e.g. "mum's the word", "my fellow americans", "perfume mister"). I haven't thought up a good way around that [yet].

- Some folks say it doesn't work on reddit, others say that it does. It works on reddit for me. More testing and possibly tweaking here.

- Apparently there was already a fork called [Jailbreak the Binary](https://chrome.google.com/webstore/detail/mmdlclbfhplmbjfefngjbicmelpbbdnh) but it doesn't seem to exist any more.

- It's my personal preference that not all gendered words are replaced. e.g. "mansplain"

***

If you'd just like to use the extension, you can install it automatically:
_TODO: replace link when upload to store_
https://chrome.google.com/webstore/detail/fiidcfoaaciclafodoficaofidfencgd

***

## Credits

 - The original plugin
 - this list of substitutions http://web.mit.edu/comdor/editguide/style-matters/gender_neutral.html
 - this article https://nonbinary.wiki/wiki/Gender_neutral_language
