import * as $dara from '@darabonba/typescript';
export declare class SwitchReplicationLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The source instance ID, which is the primary instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2zecuz9tolf******
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The name of the target disaster recovery instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4neh0q12v1******
     */
    targetInstanceName?: string;
    /**
     * @remarks
     * The region ID of the target disaster recovery instance.
     *
     * This parameter is required.
     *
     * @example
     * ap-southeast-1
     */
    targetInstanceRegionId?: string;
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
