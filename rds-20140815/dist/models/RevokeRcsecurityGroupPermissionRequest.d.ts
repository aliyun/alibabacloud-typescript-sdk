import * as $dara from '@darabonba/typescript';
export declare class RevokeRCSecurityGroupPermissionRequest extends $dara.Model {
    direction?: string;
    regionId?: string;
    securityGroupId?: string;
    securityGroupRuleIdList?: string[];
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
