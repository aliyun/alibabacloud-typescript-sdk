import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancePromoteActivityResponseBody extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * @example
     * 22973492**********
     */
    aliUid?: string;
    /**
     * @remarks
     * - China site: 26842
     * - International site: 26888
     *
     * @example
     * 26888
     */
    bid?: string;
    /**
     * @remarks
     * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the ID.
     *
     * @example
     * rm-uf6wjk5******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rm-uf6wjk5******
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The database engine type. Valid values:
     * * **MySQL**
     * * **PostgreSQL**
     * * **Oracle**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The dynamic attributes of the instance. For more information, see [Instance dynamics](https://help.aliyun.com/document_detail/2391834.html).
     *
     * @example
     * 1 (indicating that the target instance does not participate in any promotional activities)
     */
    isActivity?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 94CB8D93-017A-5AE7-A118-6E0F89D93C0A
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
