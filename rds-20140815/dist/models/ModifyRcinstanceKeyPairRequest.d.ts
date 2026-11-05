import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceKeyPairRequest extends $dara.Model {
    instanceId?: string;
    keyPairName?: string;
    reboot?: boolean;
    regionId?: string;
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
