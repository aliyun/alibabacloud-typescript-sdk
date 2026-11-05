import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupDatabaseRequest extends $dara.Model {
    /**
     * @remarks
     * The backup set ID.
     *
     * @example
     * 9026xxxx
     */
    backupId?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5xxxxxxx
     */
    DBInstanceId?: string;
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
