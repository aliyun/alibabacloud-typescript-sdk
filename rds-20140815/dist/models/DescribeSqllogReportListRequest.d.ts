import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLLogReportListRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The end time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
     * > The end time must be later than the start time.
     *
     * This parameter is required.
     *
     * @example
     * 2021-03-18T16:00:00Z
     */
    endTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type.
     *
     * Default value: **1**
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * - **30**
     * - **50**
     * - **100**
     *
     * Default value: **30**
     *
     * @example
     * 30
     */
    pageSize?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2021-03-13T16:00:00Z
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
