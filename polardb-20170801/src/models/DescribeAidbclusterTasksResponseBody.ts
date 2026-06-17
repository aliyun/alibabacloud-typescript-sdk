// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2020-06-09T18:00:00Z
   */
  completedTime?: string;
  /**
   * @remarks
   * The creation time.
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
   * The model operator instance ID.
   * 
   * @example
   * pm-2ze***
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The instance status. This parameter is not always returned.
   * 
   * @example
   * RUNNING
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The description of the instance status.
   * 
   * @example
   * RUNNING
   */
  DBNodeStatusDesc?: string;
  /**
   * @remarks
   * The availability zone.
   * 
   * @example
   * cn-beijing-i
   */
  dataZoneId?: string;
  /**
   * @remarks
   * The engine.
   * 
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
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
   * ***
   */
  modelName?: string;
  /**
   * @remarks
   * The model path.
   * 
   * @example
   * ***
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
   * The runtime parameters.
   * 
   * @example
   * xxx
   */
  runningTimes?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2020-06-09T18:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The training mode.
   * 
   * @example
   * sft
   */
  trainMode?: string;
  /**
   * @remarks
   * The training type.
   * 
   * @example
   * lora
   */
  trainType?: string;
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
   * The engine.
   * 
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 3.1
   */
  engineVersion?: string;
  /**
   * @remarks
   * A list of model operators.
   */
  items?: DescribeAIDBClusterTasksResponseBodyItems[];
  /**
   * @remarks
   * The PolarDB cluster ID.
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
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      relativeDBClusterId: 'RelativeDBClusterId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      items: { 'type': 'array', 'itemType': DescribeAIDBClusterTasksResponseBodyItems },
      relativeDBClusterId: 'string',
      requestId: 'string',
      taskType: 'string',
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

