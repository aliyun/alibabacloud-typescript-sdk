// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2020-06-09T18:00:00Z
   */
  completedTime?: string;
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @example
   * pm-2ze***
   */
  DBNodeId?: string;
  /**
   * @example
   * RUNNING
   */
  DBNodeStatus?: string;
  /**
   * @example
   * RUNNING
   */
  DBNodeStatusDesc?: string;
  /**
   * @example
   * cn-beijing-i
   */
  dataZoneId?: string;
  /**
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @example
   * 3.1
   */
  engineVersion?: string;
  /**
   * @example
   * ***
   */
  modelName?: string;
  /**
   * @example
   * ***
   */
  modelPath?: string;
  /**
   * @example
   * public
   */
  modelSource?: string;
  /**
   * @example
   * xxx
   */
  runningTimes?: string;
  /**
   * @example
   * 2020-06-09T18:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * sft
   */
  trainMode?: string;
  /**
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
   * @example
   * polardb_ai
   */
  engine?: string;
  /**
   * @example
   * 3.1
   */
  engineVersion?: string;
  items?: DescribeAIDBClusterTasksResponseBodyItems[];
  /**
   * @example
   * pc-2ze***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
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

