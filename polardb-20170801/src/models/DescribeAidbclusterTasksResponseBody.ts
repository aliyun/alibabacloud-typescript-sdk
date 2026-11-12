// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTasksResponseBodyItems extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      creationTime: 'CreationTime',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeStatus: 'DBNodeStatus',
      DBNodeStatusDesc: 'DBNodeStatusDesc',
      dataZoneId: 'DataZoneId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      modelName: 'ModelName',
      modelPath: 'ModelPath',
      modelSource: 'ModelSource',
      runningTimes: 'RunningTimes',
      startTime: 'StartTime',
      trainMode: 'TrainMode',
      trainType: 'TrainType',
      tuneArch: 'TuneArch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      creationTime: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeStatus: 'string',
      DBNodeStatusDesc: 'string',
      dataZoneId: 'string',
      engine: 'string',
      engineVersion: 'string',
      modelName: 'string',
      modelPath: 'string',
      modelSource: 'string',
      runningTimes: 'string',
      startTime: 'string',
      trainMode: 'string',
      trainType: 'string',
      tuneArch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTasksResponseBody extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      relativeDBClusterId: 'RelativeDBClusterId',
      requestId: 'RequestId',
      taskType: 'TaskType',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      items: { 'type': 'array', 'itemType': DescribeAIDBClusterTasksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'string',
      pageSize: 'string',
      relativeDBClusterId: 'string',
      requestId: 'string',
      taskType: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

