import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rc-dh2jf9n6j4s14926****
     */
    instanceId?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * k8s-node
     */
    instanceName?: string;
    /**
     * @remarks
     * Specifies the maximum number of disks attached to the instance to return. Valid values: 10 to 500.
     * - If this parameter is not specified, the default value is 20.
     * - If the specified value is less than 10, the value is fixed to 10.
     * - If the specified value is greater than or equal to 10 and less than or equal to 500, the specified value takes effect.
     *
     * @example
     * 20
     */
    maxDisksResults?: number;
    /**
     * @remarks
     * The private IP address of the instance in the VPC.
     *
     * @example
     * 192.168.XXX.XXX
     */
    privateIpAddress?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
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
