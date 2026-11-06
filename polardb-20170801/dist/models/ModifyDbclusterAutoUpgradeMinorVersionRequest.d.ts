import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterAutoUpgradeMinorVersionRequest extends $dara.Model {
    /**
     * @remarks
     * The minor engine version update policy. Valid values: Auto: automatic update. Manual: manual update.
     *
     * This parameter is required.
     *
     * @example
     * Manual
     */
    autoUpgradeMinorVersion?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-******************
     */
    DBClusterId?: string;
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
