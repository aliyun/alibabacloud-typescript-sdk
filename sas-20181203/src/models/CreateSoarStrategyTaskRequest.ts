// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoarStrategyTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * >Call the [DescribeSoarSubscribedStrategy](~~DescribeSoarSubscribedStrategy~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 13840
   */
  strategyId?: number;
  /**
   * @remarks
   * The policy name. Fixed value: Automated Batch Vulnerability Fix Policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Automated Batch Vulnerability Fixing Policy for Multiple Servers
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
   * The parameter information of the policy. A string in JSONArray format with the following items:
   * 
   * Vulnerability configuration item. Valid values:
   * - name: vluList
   * - associationProperty: sasAllVul
   * - value: basic information about the vulnerability
   * 
   * Snapshot configuration item. Valid values:
   * - name: snapshotConfig
   * - associationProperty: snapshotConfig
   * - value: storage time information
   * 
   * Notification configuration. Valid values:
   * - name: notifyConfig
   * - associationProperty: notifyConfig
   * - value: email or DingTalk configuration information.
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
   * The planned execution timestamp of the policy task. Unit: milliseconds.
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

