import * as $dara from '@darabonba/typescript';
export declare class ModifyCustinsResourceRequest extends $dara.Model {
    /**
     * @remarks
     * The adjustment time.
     *
     * @example
     * 2022-12-31 23:59:06
     */
    adjustDeadline?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-j5ekvfeengm******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The increase ratio. Unit: %.
     *
     * @example
     * 10
     */
    increaseRatio?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * Memory
     */
    resourceType?: string;
    /**
     * @remarks
     * The original value. This parameter is required when **resourcetype** is set to **instance**.
     *
     * @example
     * 200
     */
    restoreOriginalSpecification?: string;
    /**
     * @remarks
     * The target value, which applies to target tracking rules and predictive rules. The TargetValue parameter supports up to three decimal places and must be greater than 0.
     *
     * @example
     * 3000
     */
    targetValue?: number;
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
