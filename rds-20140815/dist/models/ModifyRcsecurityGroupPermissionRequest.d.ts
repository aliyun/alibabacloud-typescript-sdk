import * as $dara from '@darabonba/typescript';
export declare class ModifyRCSecurityGroupPermissionRequest extends $dara.Model {
    destCidrIp?: string;
    direction?: string;
    ipProtocol?: string;
    policy?: string;
    portRange?: string;
    priority?: string;
    regionId?: string;
    securityGroupId?: string;
    securityGroupRuleId?: string;
    sourceCidrIp?: string;
    sourcePortRange?: string;
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
