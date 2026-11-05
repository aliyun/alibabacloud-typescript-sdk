import * as $dara from '@darabonba/typescript';
export declare class ListImportTasksResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The creation time. The time is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
     *
     * @example
     * 2018-05-30T14:30:00Z
     */
    createdTime?: string;
    /**
     * @remarks
     * The kernel version number.
     *
     * @example
     * 5.7
     */
    dbVersion?: string;
    /**
     * @remarks
     * The task status.
     *
     * @example
     * Importing
     */
    status?: string;
    /**
     * @remarks
     * The ID of the target instance.
     *
     * @example
     * rm-bp*****
     */
    targetInstanceName?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 342900000
     */
    taskId?: number;
    /**
     * @remarks
     * The task name.
     *
     * @example
     * 362c6c7a-4d20-4eac-898c-1495ceab374c
     */
    taskName?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * import
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
export declare class ListImportTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * None.
     */
    items?: ListImportTasksResponseBodyItems[];
    /**
     * @remarks
     * The number of entries per page. Valid values: **1 to 100**.
     *
     * Default value: **30**.
     * > If you specify this parameter, the **PageSize** and **PageNumber** parameters are unavailable.
     *
     * @example
     * 30
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token.
     *
     * @example
     * None
     */
    nextToken?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
     */
    requestId?: string;
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
