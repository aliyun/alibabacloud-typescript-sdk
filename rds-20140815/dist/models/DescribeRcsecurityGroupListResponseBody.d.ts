import * as $dara from '@darabonba/typescript';
export declare class DescribeRCSecurityGroupListResponseBodyRCSecurityGroups extends $dara.Model {
    availableInstanceAmount?: number;
    creationTime?: string;
    description?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    instanceCount?: number;
    securityGroupId?: string;
    securityGroupType?: string;
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
export declare class DescribeRCSecurityGroupListResponseBody extends $dara.Model {
    RCSecurityGroups?: DescribeRCSecurityGroupListResponseBodyRCSecurityGroups[];
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
