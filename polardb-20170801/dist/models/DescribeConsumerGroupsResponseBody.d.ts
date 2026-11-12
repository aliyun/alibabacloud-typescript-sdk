import * as $dara from '@darabonba/typescript';
export declare class DescribeConsumerGroupsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of supported models.
     *
     * @example
     * "[]"
     */
    allowedModels?: string;
    /**
     * @remarks
     * The ID of the consumer group.
     *
     * @example
     * cg-xxxxxxxx
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The name of the consumer group.
     *
     * @example
     * test
     */
    consumerGroupName?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-01-28T09:56:03+08:00
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2026-01-04T16:09:29+08:00
     */
    gmtModified?: string;
    /**
     * @remarks
     * Indicates whether the consumer group is the default group. Valid values:
     *
     *
     * - **0**: No.
     * - **1**: Yes.
     *
     * @example
     * 0
     */
    isDefault?: string;
    /**
     * @remarks
     * The nickname of the consumer group.
     *
     * @example
     * test
     */
    nickName?: string;
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
export declare class DescribeConsumerGroupsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of consumer groups.
     *
     * @example
     * []
     */
    items?: DescribeConsumerGroupsResponseBodyItems[];
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
     * The number of entries on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
