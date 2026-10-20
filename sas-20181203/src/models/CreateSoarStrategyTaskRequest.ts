// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * >You can call the [DescribeSoarSubscribedStrategy](~~DescribeSoarSubscribedStrategy~~) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 13840
   */
  strategyId?: number;
  /**
   * @remarks
   * The Policy Name. Set the value to Automated Batch Vulnerability Fix Policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated Batch Vulnerability Fix Policy
   */
  strategyName?: string;
  /**
   * @remarks
   * The name of the policy task.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  strategyTaskName?: string;
  /**
   * @remarks
   * The parameter settings of the policy. The value is a character string in JSON array format. Details:
   * 
   * Vulnerability configuration item. Values:
   * - name: vluList
   * - associationProperty: sasAllVul
   * - value: the basic information about the vulnerability
   * 
   * Snapshot configuration item. Values:
   * - name: snapshotConfig
   * - associationProperty: snapshotConfig
   * - value: the storage duration information
   * 
   * Notification configuration:
   * - name: notifyConfig
   * - associationProperty: notifyConfig
   * - value: the configuration information about email or DingTalk
   * 
   * The vulList child configuration item is required, and the JSON array must contain an entry whose name is vulList. The snapshotConfig and notifyConfig child configuration items are optional.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "name": "vulList",
   *         "associationProperty": "sasAllVul",
   *         "value": [
   *             {
   *                 "regionId": "cn-hangzhou",
   *                 "instanceId": "i-bp10i******68lo5e",
   *                 "instanceName": "instance****",
   *                 "vulId": 3974347681,
   *                 "vulName": "centos:7:cesa-2024:1249",
   *                 "vulAliasName": "CESA-2024:1249",
   *                 "vulTag": "oval",
   *                 "vulUuid": "3c5eb76a-******-85ef-67562cdc2344",
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
  strategyTaskParams?: string;
  /**
   * @remarks
   * The scheduled execution timestamp of the policy task. Unit: milliseconds.
   * 
   * @example
   * 1586739841000
   */
  strategyTaskPlanExeTime?: number;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      strategyTaskName: 'StrategyTaskName',
      strategyTaskParams: 'StrategyTaskParams',
      strategyTaskPlanExeTime: 'StrategyTaskPlanExeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'number',
      strategyName: 'string',
      strategyTaskName: 'string',
      strategyTaskParams: 'string',
      strategyTaskPlanExeTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

