import * as $dara from '@darabonba/typescript';
export declare class SyncRCKeyPairRequest extends $dara.Model {
    keyPairName?: string;
    regionId?: string;
    syncMode?: boolean;
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
