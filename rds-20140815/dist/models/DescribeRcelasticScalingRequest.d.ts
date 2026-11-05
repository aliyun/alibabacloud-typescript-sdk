import * as $dara from '@darabonba/typescript';
export declare class DescribeRCElasticScalingRequest extends $dara.Model {
    acuType?: string;
    /**
     * @example
     * Prepaid
     */
    instanceChargeType?: string;
    /**
     * @example
     * rc-a0e466b01tif2pkrgg
     */
    instanceId?: string;
    /**
     * @example
     * mysql.x2.medium.9cm
     */
    instanceType?: string;
    /**
     * @example
     * cn-hanghzou
     */
    regionId?: string;
    /**
     * @example
     * vnode
     */
    supportCase?: string;
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
