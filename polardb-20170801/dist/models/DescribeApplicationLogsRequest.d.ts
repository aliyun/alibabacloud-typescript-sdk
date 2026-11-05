import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationLogsRequest extends $dara.Model {
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
     * The instance ID of the subcomponent.
     *
     * @example
     * pac-xxx
     */
    componentName?: string;
    /**
     * @remarks
     * The container name.
     *
     * @example
     * analytics
     */
    containerName?: string;
    /**
     * @remarks
     * The end time of the query. The time must be in the `yyyy-MM-ddTHH:mmZ` format (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2026-03-25T02:11Z
     */
    endTime?: string;
    /**
     * @remarks
     * The search keyword. This parameter is used for polarclaw instances.
     *
     * @example
     * Config
     */
    keyword?: string;
    /**
     * @remarks
     * The log level. This parameter is used for polarclaw instances.
     *
     * @example
     * WARN
     */
    level?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 3
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30 to 100. Default value: **30**.
     *
     * @example
     * 100
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
     * The start time of the query. The time must be in the `YYYY-MM-DDThh:mmZ` format (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2026-03-25T01:57Z
     */
    startTime?: string;
    /**
     * @remarks
     * The log type. This parameter is used for polarclaw instances. Valid value: gateway.
     *
     * @example
     * gateway
     */
    type?: string;
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
