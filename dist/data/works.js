// import { Form, Genre } from '@johndifelice/types';
// import type { Work } from '@johndifelice/types';
import { Form, Genre, WorkSchema } from '../types.js';
import { z } from 'zod';
export const Works = z.array(WorkSchema).parse([
    {
        id: '1',
        title: 'American Zeroes',
        description: 'Jeremiah Stumpf is certain of two things: he loves his country, and his next-door neighbors are terrorists. Between counting and recounting his cache of gold and silver coins, cleaning his assault weapons, stalking the waitress who works at the Big Jugs across the street, and strategizing with Justin, his roommate and wannabe Russian oligarch, he devises a plan to deal with his neighbors and be the hero no one ever wanted him to be.\n\n "…a romping novel that seems remarkably contemporary, but also clever enough to stand the test of time." - Self Publishing Review\n\n"A timely, satirical look at the American Far Right and extreme xenophobia." -Indie Reader',
        form: Form.Enum.novel,
        wordCount: 90000,
        pageCount: 242,
        genre: Genre.enum.literary,
        fileName: '',
        manuscriptIsVisible: false
    },
    {
        id: '2',
        title: 'Traffic Girl Wars (prologue)',
        description: 'Traffic Girl Wars follows disgraced traffic reporter, Hugh Butters, as he tries to reclaim his life after an on-air meltdown turns him into a pariah. When a stunning new traffic girl named Eustacia Sharp rises to viral fame, Hugh becomes obsessed—not just with who she is, but with what she might be. As strange events ripple through Philadelphia, from prophetic toast sightings to fracking-induced tremors, Hugh spirals into a surreal investigation that blurs the lines between journalism and myth. A satirical and apocalyptic fable about media, masculinity, and the return of the feminine divine, Traffic Girl Wars is a novel about the end of the world—and the woman who may have come to end it.',
        form: Form.Enum.novel,
        wordCount: 60000,
        pageCount: 175,
        genre: Genre.enum.literary,
        fileName: 'TGW-Prologue.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '3',
        title: 'Real Pearls',
        description: 'Real Pearls tells the story of Holly, a sixteen-year-old girl whose life is unraveling under the weight of insomnia, anxiety, and a perfectionist mother. When her estranged father reappears after years of silence, what begins as a chance encounter becomes a moment of quiet transformation. In a world obsessed with perfection, Holly receives a gift that is flawed, beautiful, and real—offering a glimmer of connection in the midst of mental chaos.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Real Pearls.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '4',
        title: 'Blind Study',
        description: 'In a lavish room disguised as a research site, five strangers are told they’re part of a memory experiment. But when the doors lock and participants begin to collapse, the true nature of the study unravels. Blind Study is a psychological thriller that explores obedience, isolation, and the desperate need to make sense of the senseless. As trust erodes and reality blurs, the question remains: who’s conducting the experiment, and who is the real subject?',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Blind Study.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '5',
        title: 'Half the Rent',
        description: 'Half the Rent is a comedy about T.J., a disillusioned bookstore employee whose life takes an unexpected turn when he moves into a luxury apartment—shared with a company that maintains a pornographic website. As he navigates a toxic workplace, a spiraling moral dilemma, and his feelings for a coworker, T.J. must decide what he’s willing to compromise for comfort, connection, and the illusion of success. A fast-paced exploration of modern masculinity, ambition, and the price of selling out.',
        form: Form.Enum.play,
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Half the Rent_v7.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '6',
        title: 'Himmler\'s Brain',
        description: 'Himmler’s Brain is a darkly comic stage play set in the final days of World War II, where British soldiers tasked with interrogating Nazi leader Heinrich Himmler instead bungle his custody, triggering a farcical cover-up. As his corpse becomes the centerpiece of increasingly absurd antics—from anatomical mockery to diplomatic deception—soldiers wrestle with trauma, guilt, repressed identity, and the meaning of justice. Blending historical satire with biting humor, the play confronts the grotesque legacy of war and the futility of trying to locate evil in a jar.',
        form: Form.Enum.play,
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Himmlers Brain.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '7',
        title: 'A Copenhagen Interpretation',
        description: 'In a university department, a rising professor, a troubled student, and a conflicted chairman become entangled in a web of ambition, power, and blurred truth. As a prestigious research paper hides a devastating lie, and a past violation surfaces, the characters confront the limits of knowledge, the cost of silence, and the peril of observation itself. Inspired by quantum theory and academic politics, A Copenhagen Interpretation is a psychological drama where no truth exists until someone chooses it.',
        form: Form.Enum.play,
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Copenhagen Interpretation_v3.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '8',
        title: 'Stan Slade and the Case of the Killer Meme',
        description: 'When hard-boiled detective Stan Slade arrives in Philadelphia, he isn’t chasing mobsters or missing jewels—he’s hunting ideas. A disgraced memetic researcher obsessed with proving the impossible, Stan seeks evidence of a meme-gene crossover, a “killer meme” capable of altering biology itself. Against the backdrop of subway stations, baseball stadiums, and the city’s gritty humor, Stan’s pursuit blends noir atmosphere with satirical science, exploring how sticky ideas shape culture, loyalty, and even love.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Stan Slade.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '9',
        title: 'You, Me, and Dr. Sperm Makes Three',
        description: 'A darkly comic tale of infertility, frustration, and resilience, this story follows a husband’s absurd and often humiliating encounters with “Dr. Sperm,” a fertility specialist whose questionable bedside manner only deepens the couple’s struggle. Blending humor with heartbreak, it explores the strains of trying to conceive, the coping mechanisms we invent, and the unexpected ways hope can return.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'You Me and Dr Sperm.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '10',
        title: 'Artifical Flame',
        description: 'Artificial Flame is a quiet, emotionally charged story about a woman confronting the truth about her engagement. Set against the backdrop of a sleepless city, it explores the loneliness of self-deception, the cost of emotional honesty, and the flickering hope for a different kind of life.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Artificial Flame_v2.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '11',
        title: 'Spread My Ashes Like We Planned',
        description: 'Johnny Ballgame wants to give up drinking and save himself, but his closest friends won\'t let him. After his death, those same friends cling to tradition, carrying his ashes on their annual canoe trip and honoring his “wishes” in ways that reveal more about their own denial than about Johnny\'s life. Tragic and morbidly comic, the story explores how loyalty, habit, and fear can stand in the way of true change.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: '',
        manuscriptIsVisible: false
    },
    {
        id: '12',
        title: 'Christmas Cake',
        description: "A middle-aged man loses the line between what's real and what's not. His insecurity in his marriage and his own masculinity sets him on a path of self-destruction. The only one he can talk to about his feelings is a mysterious friend of dubious character.",
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: '',
        manuscriptIsVisible: false
    },
    {
        id: '14',
        title: 'Are You Dead, Father?',
        description: 'When a father dies, grief does not rest quietly. Kelly and her brother Tommy confront loss in radically different ways—she through memory, he through technology. When Tommy reveals a device that may contain their father’s consciousness and all his memories, the boundary between mourning and obsession blurs. A haunting exploration of family, neglect, and the unsettling power of resurrection through data.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Are you dead father.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '15',
        title: 'Does the World Make Sense?',
        description: 'A darkly comic meditation on guilt, lust, and absurd domesticity, Does the World Make Sense? follows Ernie Pendleton, a meek office worker trapped in a punishing marriage to a paranoid wife who douses him with ice water each morning for imagined affairs. She tells him that he\'d better not come home with another woman on him. Though Ernie has never cheated, he privately obsesses over every woman he sees—until a pair of blurry reading glasses seem to cure him of his lust. When a terror attack literally covers him with the female terrorist, Ernie is forced to confront the twisted intersection of fidelity, punishment, and forgiveness. Hilarious, tragic, and uncomfortably intimate, the story asks whether penance can ever be enough in a world that defies moral logic.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Does the World Make Sense.pdf',
        manuscriptIsVisible: false
    },
    {
        id: '16',
        title: 'The Perils of Believing  in Santa Claus',
        description: 'Perils of Believing in Santa Claus explores a fractured marriage, parental disillusionment, and the fragile balance between innocence and truth. Set during a time of Christmas rituals, the story follows a father numbed by guilt and bourbon, a mother who sees more than she admits, and a son whose quiet empathy outpaces his parents’ understanding. A meditation on faith, betrayal, and the unseen intelligence of a child, it asks what we choose to believe, and what it costs us when we stop.',
        form: Form.Enum['short story'],
        wordCount: 0,
        pageCount: 0,
        genre: Genre.enum.literary,
        fileName: 'Perils.pdf',
        manuscriptIsVisible: false
    }
]);
