import * as $dara from '@darabonba/typescript';
export declare class SyncRCKeyPairResponseBodyData extends $dara.Model {
    isSyncInfo?: boolean;
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
export declare class SyncRCKeyPairResponseBody extends $dara.Model {
    data?: SyncRCKeyPairResponseBodyData;
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
