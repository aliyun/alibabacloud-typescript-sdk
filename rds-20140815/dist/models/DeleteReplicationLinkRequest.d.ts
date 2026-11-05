import * as $dara from '@darabonba/typescript';
export declare class DeleteReplicationLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the disaster recovery instance.
     *
     * This parameter is required.
     *
     * @example
     * m-2zecuz9tolf******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * Specifies whether to delete the data synchronization link between the primary instance and the disaster recovery instance, and promote the disaster recovery instance to a primary instance. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    promoteToMaster?: boolean;
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
