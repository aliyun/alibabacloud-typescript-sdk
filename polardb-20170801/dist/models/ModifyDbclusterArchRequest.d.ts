import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterArchRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to automatically use coupons. Valid values:
     * * true (default): Uses coupons.
     * * false: Does not use coupons.
     *
     * @example
     * false
     */
    autoUseCoupon?: boolean;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to enable the hot standby cluster. Valid values:
     * - on: Enables the hot standby cluster.
     * The equal (peer cluster) feature has been retired and is unavailable. Clusters with HotStandbyCluster set to StandbyClusterON do not support switching the high-availability mode by using this operation.
     *
     * @example
     * on
     */
    hotStandbyCluster?: string;
    /**
     * @remarks
     * The coupon code. If you do not specify this parameter, the default coupon is used.
     *
     * @example
     * 727xxxxxx934
     */
    promotionCode?: string;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view region details.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The zone of the hot standby storage cluster. Valid values:
     *
     * - **auto** (default): Automatically selects the zone.
     * > You can use the default value when the HotStandbyCluster parameter is set to on. When the HotStandbyCluster parameter is set to equal, you must specify a zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/98041.html) operation to view zone details.
     *
     * > When you specify a zone, you must not allocate a zone that is already in use by the cluster. You can query the currently active zones through the ZoneIds parameter of DescribeDBClusterAttribute.
     *
     * @example
     * cn-beijing-i
     */
    standbyAZ?: string;
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
