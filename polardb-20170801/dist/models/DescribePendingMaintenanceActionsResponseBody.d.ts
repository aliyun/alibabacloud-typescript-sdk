import * as $dara from '@darabonba/typescript';
export declare class DescribePendingMaintenanceActionsResponseBodyTypeList extends $dara.Model {
    /**
     * @remarks
     * The number of pending events.
     *
     * @example
     * 1
     */
    count?: number;
    /**
     * @remarks
     * The task type of the pending event. Valid values:
     *
     * - **DatabaseSoftwareUpgrading**: database software upgrade
     *
     * - **DatabaseHardwareMaintenance**: hardware maintenance and upgrade
     *
     * - **DatabaseStorageUpgrading**: database storage upgrade
     *
     * - **DatabaseProxyUpgrading**: proxy minor version upgrade
     *
     * @example
     * DatabaseSoftwareUpgrading
     */
    taskType?: string;
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
export declare class DescribePendingMaintenanceActionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 314127C2-B6C1-4F58-B1F6-E6B645******
     */
    requestId?: string;
    /**
     * @remarks
     * The details of pending events.
     */
    typeList?: DescribePendingMaintenanceActionsResponseBodyTypeList[];
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
