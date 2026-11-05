import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2628785.html) operation to query the instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 221172852******
     */
    orderId?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
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
