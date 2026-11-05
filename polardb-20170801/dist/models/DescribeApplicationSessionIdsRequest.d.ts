import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationSessionIdsRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The end time of the query.
     *
     * The time follows the ISO 8601 standard and is in the UTC time zone (format: YYYY-MM-DDTHH:mmZ).
     *
     * This parameter is required.
     *
     * @example
     * 2020-02-01T18:00Z
     */
    endTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
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
    /**
     * @remarks
     * The start time of the query. The time is in the `YYYY-MM-DDThh:mmZ` format (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2022-11-15T16:00Z
     */
    startTime?: string;
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
