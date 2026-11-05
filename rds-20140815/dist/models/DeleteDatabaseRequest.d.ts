import * as $dara from '@darabonba/typescript';
export declare class DeleteDatabaseRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The database name.
     *
     * You cannot delete multiple databases at a time.
     *
     * This parameter is required.
     *
     * @example
     * testdb01
     */
    DBName?: string;
    resourceOwnerId?: number;
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
