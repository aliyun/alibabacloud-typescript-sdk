import * as $dara from '@darabonba/typescript';
export declare class TempModifyDBNodeRequestDBNode extends $dara.Model {
    /**
     * @remarks
     * The specifications of the node to be upgraded or added.
     *
     * > - When you add a node, the node specifications must be the same as those of the existing nodes.
     * > - For more information about the specifications of existing nodes in the cluster, see [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html).
     *
     * @example
     * polar.mysql.x4.medium
     */
    targetClass?: string;
    /**
     * @remarks
     * The zone of the node to be added. The zone must be the same as that of the existing nodes.
     *
     * @example
     * cn-hangzhou-i
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
export declare class TempModifyDBNodeRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to automatically use a coupon. Valid values:
     *
     * - **true**: uses a coupon. This is the default value.
     * - **false**: does not use a coupon.
     */
    autoUseCoupon?: boolean;
    /**
     * @remarks
     * The client token that ensures the idempotence of the request. The client generates the token to ensure uniqueness across different requests. The token is case-sensitive and can contain up to 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f5********************
     */
    clientToken?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-xxxxxxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The information about the node to be upgraded or added.
     *
     * This parameter is required.
     */
    DBNode?: TempModifyDBNodeRequestDBNode[];
    /**
     * @remarks
     * The modification type. Set the value to **TempUpgrade**.
     *
     * This parameter is required.
     *
     * @example
     * TempUpgrade
     */
    modifyType?: string;
    /**
     * @remarks
     * The operation type. Valid values:
     *
     * - **Modify**: temporarily upgrades the configuration.
     * - **Add**: temporarily adds a node.
     *
     * This parameter is required.
     *
     * @example
     * Modify
     */
    operationType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The coupon ID. If you do not specify this parameter, the default coupon is used.
     *
     * @example
     * 727xxxxxx934
     */
    promotionCode?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The time when the temporary upgrade is restored. Specify the time in the YYYY-MM-DD hh:mm:ss format.
     *
     * > The restore time must be at least 1 hour later than the current time and at least 1 day earlier than the cluster expiration time.
     *
     * This parameter is required.
     *
     * @example
     * 2021-09-23 18:16:00
     */
    restoreTime?: string;
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
