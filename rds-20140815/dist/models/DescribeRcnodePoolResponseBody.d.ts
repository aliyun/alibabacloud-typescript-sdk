import * as $dara from '@darabonba/typescript';
export declare class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
    /**
     * @remarks
     * The category of the data cloud disk. Only **cloud_essd** (ESSD cloud disk) is supported.
     *
     * @example
     * cloud_essd
     */
    category?: string;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    deleteWithInstance?: boolean;
    /**
     * @remarks
     * Indicates whether the cloud disk is encrypted. Valid values:
     *
     * - **true**: The cloud disk is encrypted.
     * - **false** (default): The cloud disk is not encrypted.
     *
     * @example
     * false
     */
    encrypted?: string;
    /**
     * @remarks
     * The performance level of the ESSD cloud disk. Valid values:
     *
     * - **PL0**: A single cloud disk delivers up to 10,000 random read/write IOPS.
     * - **PL1**: A single cloud disk delivers up to 50,000 random read/write IOPS.
     * - **PL2**: A single cloud disk delivers up to 100,000 random read/write IOPS.
     * - **PL3**: A single cloud disk delivers up to 1,000,000 random read/write IOPS.
     *
     * @example
     * PL0
     */
    performanceLevel?: string;
    /**
     * @remarks
     * The size of the data cloud disk. Unit: GiB.
     *
     * @example
     * 20
     */
    size?: number;
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
export declare class DescribeRCNodePoolResponseBodyNodePoolListSystemDisk extends $dara.Model {
    /**
     * @remarks
     * The category of the system cloud disk. Only **cloud_essd** (ESSD) is supported.
     *
     * @example
     * cloud_essd
     */
    category?: string;
    /**
     * @remarks
     * The performance level of the ESSD cloud disk. Valid values:
     *
     * - **PL0**: A single cloud disk delivers up to 10,000 random read/write IOPS.
     * - **PL1**: A single cloud disk delivers up to 50,000 random read/write IOPS.
     * - **PL2**: A single cloud disk delivers up to 100,000 random read/write IOPS.
     * - **PL3**: A single cloud disk delivers up to 1,000,000 random read/write IOPS.
     *
     * @example
     * PL1
     */
    performanceLevel?: string;
    /**
     * @remarks
     * The size of the system cloud disk. Unit: GiB.
     *
     * @example
     * 40
     */
    size?: number;
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
export declare class DescribeRCNodePoolResponseBodyNodePoolListTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * Testkey1
     */
    key?: string;
    /**
     * @remarks
     * The tag value that corresponds to the tag key.
     *
     * @example
     * Testvalue1
     */
    value?: string;
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
export declare class DescribeRCNodePoolResponseBodyNodePoolList extends $dara.Model {
    /**
     * @remarks
     * Indicates whether automatic payment is enabled. Valid values:
     * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
     * - **false**: Only an order is generated and no payment is made.
     *
     * @example
     * true
     */
    autoPay?: boolean;
    /**
     * @remarks
     * Indicates whether auto-renewal is enabled for the instance. Valid values:
     *
     * * **true** (default): Auto-renewal is enabled.
     * * **false**: Auto-renewal is disabled.
     *
     * @example
     * true
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * The ID of the RDS Custom container cluster.
     *
     * @example
     * c463aaa89e2b84cacacfbf23c4867****
     */
    clusterId?: string;
    /**
     * @remarks
     * Indicates whether joining an ACK cluster is allowed.
     *
     * @example
     * 1
     */
    createMode?: string;
    /**
     * @remarks
     * The list of data cloud disks.
     */
    dataDisk?: DescribeRCNodePoolResponseBodyNodePoolListDataDisk[];
    /**
     * @remarks
     * The ID of the deployment set.
     *
     * @example
     * ds-bp18ukv66rlyuffv****
     */
    deploymentSetId?: string;
    /**
     * @remarks
     * The description of the instance.
     *
     * @example
     * test
     */
    description?: string;
    /**
     * @remarks
     * The hostname of the instance.
     *
     * @example
     * testHost1
     */
    hostName?: string;
    /**
     * @remarks
     * The ID of the image used by the instance.
     *
     * @example
     * image-dsvjzw2ii8n4fvr****
     */
    imageId?: string;
    /**
     * @remarks
     * The billing method. Valid values:
     * * **Prepaid**: Subscription.
     * * **Postpaid**: Pay-as-you-go.
     *
     * @example
     * Prepaid
     */
    instanceChargeType?: string;
    /**
     * @remarks
     * The name of the instance.
     *
     * @example
     * test
     */
    instanceName?: string;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * mysql.i8.large.2cm
     */
    instanceType?: string;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    internetChargeType?: string;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    internetMaxBandwidthOut?: number;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    ioOptimized?: string;
    /**
     * @remarks
     * The name of the key pair.
     *
     * @example
     * dell5502
     */
    keyPairName?: string;
    /**
     * @remarks
     * The ID of the node pool.
     *
     * @example
     * np31da1b38983f4511b490fc62108a****
     */
    nodePoolId?: string;
    /**
     * @remarks
     * The name of the node pool.
     *
     * @example
     * np31da1b38983f4511b490fc62108a****
     */
    nodePoolName?: string;
    /**
     * @remarks
     * The password of the root account for the instance.
     *
     * @example
     * testPassword
     */
    password?: string;
    /**
     * @remarks
     * The subscription duration.
     *
     * @example
     * 1
     */
    period?: number;
    /**
     * @remarks
     * The unit of the subscription duration for the subscription Billable methods. Valid values:
     * - **Year**: Year.
     * - **Month** (default): Month.
     *
     * @example
     * Year
     */
    periodUnit?: string;
    /**
     * @remarks
     * The region ID of the instance.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    securityEnhancementStrategy?: string;
    /**
     * @remarks
     * The ID of the security group.
     *
     * @example
     * sg-uf6av412xaxixuez****
     */
    securityGroupId?: string;
    /**
     * @remarks
     * A reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    spotStrategy?: string;
    /**
     * @remarks
     * The specifications of the system cloud disk.
     */
    systemDisk?: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk;
    /**
     * @remarks
     * The list of tags.
     */
    tag?: DescribeRCNodePoolResponseBodyNodePoolListTag[];
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-zm0qvgv3sm3sjzbkr****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-beijing-h
     */
    zoneId?: string;
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
export declare class DescribeRCNodePoolResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of node pool information.
     */
    nodePoolList?: DescribeRCNodePoolResponseBodyNodePoolList[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C816A4BF-A6EC-4722-95F9-2055859CCFD2
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
