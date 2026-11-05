import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceKeywordsResponseBodyWords extends $dara.Model {
    word?: string[];
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
export declare class DescribeInstanceKeywordsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The type of the reserved keyword, which indicates whether the keyword is reserved for account names or database names.
     *
     * @example
     * account
     */
    key?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
     */
    requestId?: string;
    words?: DescribeInstanceKeywordsResponseBodyWords;
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
