import * as $dara from '@darabonba/typescript';
export declare class DescribeCurrentModifyOrderResponseBodyModifyOrder extends $dara.Model {
    /**
     * @remarks
     * The instance family.
     *
     * @example
     * x
     */
    classGroup?: string;
    /**
     * @remarks
     * The number of CPU cores that correspond to the instance specifications. Unit: cores.
     *
     * @example
     * 8
     */
    cpu?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-cn-nwy39qeys0003r
     */
    dbInstanceId?: string;
    /**
     * @remarks
     * The effective time. Valid values:
     * * **Immediate** (default): takes effect immediately.
     * * **MaintainTime**: takes effect within the maintenance window. For more information, see [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/610402.html).
     *
     * @example
     * MaintainTime
     */
    effectiveTime?: string;
    /**
     * @remarks
     * The mark.
     *
     * @example
     * None
     */
    mark?: string;
    /**
     * @remarks
     * The memory capacity that corresponds to the instance specifications. Unit: GB.
     *
     * @example
     * 1024
     */
    memoryClass?: string;
    /**
     * @remarks
     * The task status.
     *
     * @example
     * Succeed,Scheduled,Running,Cancelling,Canceled,Waiting
     */
    status?: string;
    /**
     * @remarks
     * The storage description.
     *
     * @example
     * 20
     */
    storage?: string;
    /**
     * @remarks
     * The target instance specifications for the specification change.
     *
     * @example
     * mysql.x2.medium.2c
     */
    targetDBInstanceClass?: string;
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
export declare class DescribeCurrentModifyOrderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The specification change order.
     */
    modifyOrder?: DescribeCurrentModifyOrderResponseBodyModifyOrder[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C87415BE-F5AB-55A4-A60E-A0A329EAF2A4
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
