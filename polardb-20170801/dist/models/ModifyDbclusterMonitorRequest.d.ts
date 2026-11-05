import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMonitorRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The interval at which monitoring data is collected. Valid values: **5** and **60**. Unit: seconds.
     *
     * This parameter is required.
     *
     * @example
     * 5
     */
    period?: string;
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
