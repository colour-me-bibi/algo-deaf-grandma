

def deaf_grandma():
    """
    This function imitates a conversation between the user with a Grandma who's hard of hearing
    and follows these constraints:
        If you don't input anything (just hit enter) she responds with WHAT?!
        If you ask a question with any lower-case letters, she responds with SPEAK UP, KID!
        If you talk to her in all upper-case letters, she responds with NO, NOT SINCE 1946!
        The first time you say GOODBYE! she says LEAVING SO SOON?
        The second time you say GOODBYE! she says LATER, SKATER! and the program exits.
    """

    is_leaving = False

    print("HEY KID!")
    while True:
        response = input()

        if not response:
            print("WHAT?!?")
        elif response.isupper():
            if response == "GOODBYE!":
                if is_leaving:
                    print("LATER, SKATER!")
                    break
                else:
                    print("LEAVING SO SOON?")
                    is_leaving = True
            else:
                print("NO, NOT SINCE 1946!")
        else:
            print("SPEAK UP, KID!")


def main():
    deaf_grandma()


if __name__ == "__main__":
    main()
