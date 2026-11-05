import * as $dara from '@darabonba/typescript';
export declare class DescribeVpcsResponseBodyVpcsVSwitchs extends $dara.Model {
    /**
     * @remarks
     * The vSwitch CIDR block.
     *
     * @example
     * 172.16.0.0/24
     */
    cidrBlock?: string;
    /**
     * @remarks
     * The time when the vSwitch was created.
     *
     * @example
     * 2023-01-01T12:00:00Z
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The time when the vSwitch was last modified.
     *
     * @example
     * 2023-01-01T12:00:00Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * Indicates whether the vSwitch is the default vSwitch.
     *
     * @example
     * true
     */
    isDefault?: boolean;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-a
     */
    izNo?: string;
    /**
     * @remarks
     * The status of the vSwitch.
     *
     * @example
     * Available
     */
    status?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-xxxxxx
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The vSwitch name.
     *
     * @example
     * default-vswitch
     */
    vSwitchName?: string;
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
export declare class DescribeVpcsResponseBodyVpcs extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * @example
     * 18757856124****
     */
    aliUid?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * 26888
     */
    bid?: string;
    /**
     * @remarks
     * The CIDR block of the VPC.
     *
     * @example
     * 172.16.0.0/12
     */
    cidrBlock?: string;
    /**
     * @remarks
     * The time when the VPC was created.
     *
     * @example
     * 2023-01-01T12:00:00Z
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The time when the VPC was last modified.
     *
     * @example
     * 2023-01-01T12:00:00Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * Indicates whether the VPC is the default VPC.
     *
     * @example
     * true
     */
    isDefault?: boolean;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionNo?: string;
    /**
     * @remarks
     * The status of the VPC.
     *
     * @example
     * Available
     */
    status?: string;
    /**
     * @remarks
     * The vSwitch information.
     */
    vSwitchs?: DescribeVpcsResponseBodyVpcsVSwitchs[];
    /**
     * @remarks
     * The ID of the VPC.
     *
     * @example
     * vpc-xxxxxx
     */
    vpcId?: string;
    /**
     * @remarks
     * The name of the VPC.
     *
     * @example
     * my-vpc
     */
    vpcName?: string;
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
export declare class DescribeVpcsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8F4596F7-FA71-590E-9E1C-********
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 14
     */
    totalCount?: number;
    /**
     * @remarks
     * The list of VPCs.
     */
    vpcs?: DescribeVpcsResponseBodyVpcs[];
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
