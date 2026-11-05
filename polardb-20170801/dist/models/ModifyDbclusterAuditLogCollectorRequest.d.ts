import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterAuditLogCollectorRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable or disable SQL collector. Valid values:
     *
     * - Enable
     *
     * - Disable
     *
     * This parameter is required.
     *
     * @example
     * Enable
     */
    collectorStatus?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
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
