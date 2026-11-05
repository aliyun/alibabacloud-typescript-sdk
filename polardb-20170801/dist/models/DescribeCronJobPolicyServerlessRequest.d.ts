import * as $dara from '@darabonba/typescript';
export declare class DescribeCronJobPolicyServerlessRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the serverless cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the scheduled task.
     *
     * @example
     * 8006e51c-dab3-4602-bc69-4f728002c6ce
     */
    jobId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records to return on each page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
