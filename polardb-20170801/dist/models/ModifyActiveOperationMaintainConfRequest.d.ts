import * as $dara from '@darabonba/typescript';
export declare class ModifyActiveOperationMaintainConfRequest extends $dara.Model {
    /**
     * @remarks
     * The remarks for the operation.
     *
     * @example
     * test
     */
    comment?: string;
    /**
     * @remarks
     * The time of the cycle.
     *
     * - If CycleType is set to Month, specify the day of the month. Valid values: 1 to 28. Use commas (,) to separate multiple days.
     *
     * - If CycleType is set to Week, specify the day of the week. Valid values: 1 to 7. Use commas (,) to separate multiple days.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    cycleTime?: string;
    /**
     * @remarks
     * The cycle type. Valid values:
     *
     * - Month
     *
     * - Week
     *
     * This parameter is required.
     *
     * @example
     * Week
     */
    cycleType?: string;
    /**
     * @remarks
     * The end time of the maintenance window. Use the HH:mmZ format. The time is in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 12:00Z
     */
    maintainEndTime?: string;
    /**
     * @remarks
     * The start time of the task. The time must be in UTC and in the yyyy-mm-ddThh:mm:ssZ format.
     *
     * This parameter is required.
     *
     * @example
     * 8:00Z
     */
    maintainStartTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the region.
     *
     * This parameter is required.
     *
     * @example
     * cn-chengdu
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * Specifies whether to enable the configuration. Valid values: 1 (Enable) and 2 (Disable).
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    status?: number;
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
