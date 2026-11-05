import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodesParametersRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The IDs of the nodes. To specify multiple node IDs, separate the IDs with a comma (,).
     *
     * This parameter is required.
     *
     * @example
     * pi-****************， pi-****************
     */
    DBNodeIds?: string;
    /**
     * @remarks
     * Specifies whether to apply the parameter modifications and restart the node. Valid values: \\`false\\` (default): Schedules the task. \\`true\\`: Executes the task immediately.
     *
     * @example
     * false
     */
    fromTimeService?: boolean;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the parameter template.
     *
     * @example
     * pcpg-**************
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * A JSON string that contains the parameters and their values.
     *
     * @example
     * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
     */
    parameters?: string;
    /**
     * @remarks
     * The latest time to start the scheduled task. The time must be in the \\`YYYY-MM-DDThh:mm:ssZ\\` format and in UTC.
     *
     * @example
     * 2022-04-28T14:30:00Z
     */
    plannedEndTime?: string;
    /**
     * @remarks
     * The earliest time to start the scheduled task. The time must be in the \\`YYYY-MM-DDThh:mm:ssZ\\` format and in UTC.
     *
     * @example
     * 2022-04-28T14:00:00Z
     */
    plannedStartTime?: string;
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
