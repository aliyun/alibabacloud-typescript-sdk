// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskDetailResponseBodyTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The operational log information of the task.
   * 
   * @example
   * {
   * "resultContent": "{\\"failedNum\\":0,\\"totalNum\\":1,\\"successNum\\":1}",
   * "resultStatus": 0,
   * "status": 2
   * }
   */
  logInfo?: string;
  /**
   * @remarks
   * The parameters of the task.
   * 
   * @example
   * [
   *     {
   *         "name": "vulList",
   *         "associationProperty": "sasAllVul",
   *         "value": [
   *             {
   *                 "regionId": "cn-hangzhou",
   *                 "instanceId": "i-bp10i3dtyq7x4****5e",
   *                 "instanceName": "xxx",
   *                 "vulId": 1222,
   *                 "vulName": "centos:7:cesa-2024:1249",
   *                 "vulAliasName": "CESA-2024:1249",
   *                 "vulTag": "oval",
   *                 "vulUuid": "3c5eb76a-df89-****-85ef-67562cdc2344",
   *                 "vulType": "cve",
   *                 "vulModifyTs": 1721324258000
   *             }
   *         ]
   *     },
   *     {
   *         "name": "snapshotConfig",
   *         "associationProperty": "snapshotConfig",
   *         "value": {
   *             "ttl": 1
   *         }
   *     },
   *     {
   *         "name": "notifyConfig",
   *         "associationProperty": "notifyConfig",
   *         "value": {
   *             "ding": [
   *                 {
   *                     "value": 2195,
   *                     "label": "test"
   *                 }
   *             ]
   *         }
   *     }
   * ]
   */
  params?: string;
  /**
   * @remarks
   * The process information of the task.
   * 
   * @example
   * {
   *     "edges": [
   *         {
   *             "level": 0,
   *             "removeFlag": 0,
   *             "source": 1,
   *             "target": 8
   *         }
   *     ],
   *     "nodes": [
   *         {
   *             "actionId": "Action_014s73k",
   *             "iconUrl": "https://img.alicdn.com/tfs/TB1T*****jSZLeXXb9kVXa-12-14.svg",
   *             "id": 1,
   *             "label": "describeDisks",
   *             "nodeName": "DescribeDisks",
   *             "status": 0,
   *             "type": "openAPI"
   *         }
   *     ]
   * }
   */
  processInfo?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task-1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
      params: 'Params',
      processInfo: 'ProcessInfo',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: 'string',
      params: 'string',
      processInfo: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarStrategyTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBBEB173-1F43-505F-A876-C03ECDF6CE4C
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task.
   */
  taskDetail?: DescribeSoarStrategyTaskDetailResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskDetail: DescribeSoarStrategyTaskDetailResponseBodyTaskDetail,
    };
  }

  validate() {
    if(this.taskDetail && typeof (this.taskDetail as any).validate === 'function') {
      (this.taskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

