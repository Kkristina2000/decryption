Message decryption(HTML+CSS+JavaScript)

TEST TASK: 
Alice knows that NSA agents use the following algorithm to cipher their messages.

1) They delete all spaces and punctuation marks.
2) They replace all successive identical letters with only one such letter.
3) They insert two identical letters at an arbitrary place many times.

Alice has intercepted some messages which are "meaningless" sequences of letters that NSA agent Bob has sent to other NSA agent Caroline about possible Alice’s location. She wants to be able to restore the message as it was after step 2). Help Alice write aliceDecrypt(message) JavaScript function that removes all pairs of identical letters from the message inserted at the 3rd step. 

The solution should be a simple HTML page with one Textarea, one Button, and one Answer area. When a user clicks the Button, the message entered in Textarea should be processed by aliceDecrypt(message) function and the result should be displayed in Answer area. The message always consists of lowercase English letters and its length is at most 100000. Output the message after step 2). The program should produce an answer in less than a few seconds.

Example:
Insert the following message in Textarea: wwaldaadicffenn
Press Decrypt button
The decrypted message appears in Answer area: alice

