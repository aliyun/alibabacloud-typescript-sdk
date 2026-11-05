import * as $dara from '@darabonba/typescript';
export declare class DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions extends $dara.Model {
    createTime?: string;
    destCidrIp?: string;
    direction?: string;
    ipProtocol?: string;
    policy?: string;
    portRange?: string;
    priority?: string;
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
export declare class DescribeRCSecurityGroupPermissionResponseBody extends $dara.Model {
    innerAccessPolicy?: string;
    regionId?: string;
    requestId?: string;
    securityGroupId?: string;
    securityGroupPermissions?: DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions[];
    vpcId?: string;
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
