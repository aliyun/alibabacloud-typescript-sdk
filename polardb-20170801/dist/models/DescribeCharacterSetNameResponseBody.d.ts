import * as $dara from '@darabonba/typescript';
export declare class DescribeCharacterSetNameResponseBodyCharacterSetNameItems extends $dara.Model {
    characterSetName?: string[];
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
export declare class DescribeCharacterSetNameResponseBody extends $dara.Model {
    characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
    /**
     * @remarks
     * The cluster engine.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 34458CD3-33E0-4624-BFEF-840C15******
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
