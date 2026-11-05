import * as $dara from '@darabonba/typescript';
export declare class CancelActiveOperationTasksRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * >
     *
     * *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information about all clusters within a specified account.
     *
     * *   If you do not specify this parameter, scheduled tasks on your clusters that are deployed in all regions are queried.
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
     * The IDs of O\\&M events that are canceled at a time. Separate multiple IDs with commas (,).
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
