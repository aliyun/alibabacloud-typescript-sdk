import * as $dara from '@darabonba/typescript';
export declare class ModifyDBDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the database.
     *
     * This parameter is required.
     *
     * @example
     * testdb01
     */
    DBDescription?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * This parameter is required.
     *
     * @example
     * testdb
     */
    DBName?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
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
