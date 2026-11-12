import * as $dara from '@darabonba/typescript';
export declare class DescribeVSwitchesResponseBodyVSwitchs extends $dara.Model {
    /**
     * @remarks
     * The number of available IP addresses in the vSwitch.
     *
     * @example
     * 1
     */
    availableIpAddressCount?: number;
    /**
     * @remarks
     * The IPv4 CIDR block of the vSwitch.
     *
     * @example
     * 172.16.0.0/24
     */
    cidrBlock?: string;
    /**
     * @remarks
     * The description of the vSwitch.
     *
     * @example
     * vSwitchDescription
     */
    description?: string;
    /**
     * @remarks
     * Indicates whether the vSwitch is the default vSwitch. Valid values:
     *
     * - **true**: The vSwitch is the default vSwitch.
     *
     * - **false**: The vSwitch is not the default vSwitch.
     *
     * @example
     * true
     */
    isDefault?: boolean;
    /**
     * @remarks
     * The zone where the NAT Gateway is located.
     *
     * @example
     * cn-hangzhou-b
     */
    izNo?: string;
    /**
     * @remarks
     * The status of the vSwitch. Valid values:
     *
     * - **Pending**: The vSwitch is being configured.
     *
     * - **Available**: The vSwitch is active.
     *
     * @example
     * Available
     */
    status?: string;
    /**
     * @remarks
     * The ID of the vSwitch.
     *
     * @example
     * vsw-25bcdxs7pv1****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The name of the vSwitch.
     *
     * @example
     * vSwitch
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
export declare class DescribeVSwitchesResponseBody extends $dara.Model {
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
     * The number of entries on the current page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9A572171-4E27-40D1-BD36-D26C9E71E29E
     */
    requestId?: string;
    /**
     * @remarks
     * The number of entries in the list.
     *
     * @example
     * 1
     */
    totalCount?: number;
    /**
     * @remarks
     * The list of vSwitches.
     */
    vSwitchs?: DescribeVSwitchesResponseBodyVSwitchs[];
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
