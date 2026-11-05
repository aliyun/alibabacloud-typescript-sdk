import * as $dara from '@darabonba/typescript';
export declare class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures extends $dara.Model {
    code?: string;
    message?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures extends $dara.Model {
    failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PreCheckCreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
    failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures;
    /**
     * @remarks
     * The pre-check result.
     *
     * @example
     * True
     */
    preCheckResult?: boolean;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B415BC6-FE84-5323-A255-42CF330DB99C
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
