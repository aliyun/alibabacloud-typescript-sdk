import * as $dara from '@darabonba/typescript';
export declare class ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey extends $dara.Model {
    accessKeyId?: string;
    createDate?: string;
    deleteDate?: string;
    recycleDate?: string;
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
export declare class ListAccessKeysInRecycleBinResponseBodyAccessKeys extends $dara.Model {
    accessKey?: ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey[];
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
export declare class ListAccessKeysInRecycleBinResponseBody extends $dara.Model {
    accessKeys?: ListAccessKeysInRecycleBinResponseBodyAccessKeys;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
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
