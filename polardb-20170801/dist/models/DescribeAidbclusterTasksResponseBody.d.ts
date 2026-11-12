import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTasksResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The task completion time.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T18:00:00Z
     */
    completedTime?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-03-25T09:37:10Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The node description.
     *
     * @example
     * test
     */
    DBNodeDescription?: string;
    /**
     * @remarks
     * The instance ID of the model operator.
     *
     * @example
     * pm-2ze***
     */
    DBNodeId?: string;
    /**
     * @remarks
     * The instance status. This field may not be returned.
     *
     * @example
     * RUNNING
     */
    DBNodeStatus?: string;
    /**
     * @remarks
     * The instance status.
     *
     * @example
     * RUNNING
     */
    DBNodeStatusDesc?: string;
    /**
     * @remarks
     * The zone.
     *
     * @example
     * cn-beijing-i
     */
    dataZoneId?: string;
    /**
     * @remarks
     * The cluster engine.
     *
     * @example
     * polardb_ai
     */
    engine?: string;
    /**
     * @remarks
     * The DPI engine version.
     *
     * @example
     * 3.1
     */
    engineVersion?: string;
    /**
     * @remarks
     * The model name.
     *
     * @example
     * Sample model
     */
    modelName?: string;
    /**
     * @remarks
     * The path.
     *
     * @example
     * /models/example-model
     */
    modelPath?: string;
    /**
     * @remarks
     * The model source.
     *
     * @example
     * public
     */
    modelSource?: string;
    /**
     * @remarks
     * The number of task executions.
     *
     * @example
     * 1
     */
    runningTimes?: string;
    /**
     * @remarks
     * The task start time.
     *
     * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2020-06-09T18:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The mode.
     *
     * @example
     * sft
     */
    trainMode?: string;
    /**
     * @remarks
     * The type.
     *
     * @example
     * lora
     */
    trainType?: string;
    /**
     * @remarks
     * The tuning framework.
     *
     * @example
     * lora
     */
    tuneArch?: string;
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
export declare class DescribeAIDBClusterTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster engine.
     *
     * @example
     * polardb_ai
     */
    engine?: string;
    /**
     * @remarks
     * The DPI engine version.
     *
     * @example
     * 3.1
     */
    engineVersion?: string;
    /**
     * @remarks
     * The cluster endpoint details.
     */
    items?: DescribeAIDBClusterTasksResponseBodyItems[];
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 0
     */
    pageNumber?: number;
    /**
     * @remarks
     * The total number of records on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The number of records to display on each page.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster to which the resource belongs.
     *
     * @example
     * pc-2ze***
     */
    relativeDBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
     */
    requestId?: string;
    /**
     * @remarks
     * The task type.
     *
     * @example
     * train
     */
    taskType?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 2
     */
    totalRecordCount?: string;
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
