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
     * The type of the database engine.
     *
     * @example
     * mysql
     */
    engine?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
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
