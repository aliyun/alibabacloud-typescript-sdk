import * as $dara from '@darabonba/typescript';
export declare class CancelActiveOperationTasksRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. This parameter is required. You can call the DescribeRegions operation to query the region ID. If this parameter is left empty, scheduled tasks in all regions under the current account are queried by default.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The IDs of the O&M events to be canceled in batches. Separate multiple IDs with commas (,).
     *
     * This parameter is required.
     *
     * @example
     * 2355,2352
     */
    taskIds?: string;
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
