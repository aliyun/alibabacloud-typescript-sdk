import * as $dara from '@darabonba/typescript';
export declare class SyncRCSecurityGroupRequest extends $dara.Model {
    instanceId?: string;
    regionId?: string;
    securityGroupId?: string;
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
