import * as $dara from '@darabonba/typescript';
export declare class ListAccessKeysResponseBodyAccessKeysAccessKey extends $dara.Model {
    accessKeyId?: string;
    createDate?: string;
    status?: string;
    updateDate?: string;
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
export declare class ListAccessKeysResponseBodyAccessKeys extends $dara.Model {
    accessKey?: ListAccessKeysResponseBodyAccessKeysAccessKey[];
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
export declare class ListAccessKeysResponseBody extends $dara.Model {
    accessKeys?: ListAccessKeysResponseBodyAccessKeys;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
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
