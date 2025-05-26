// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApsLifecycleStrategyResponseBodyItemsOperationTables } from "./ListApsLifecycleStrategyResponseBodyItemsOperationTables";


export class ListApsLifecycleStrategyResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * aps-******
   */
  apsJobId?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2021-06-30T02:44:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2021-07-03T06:33:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The operation tables.
   */
  operationTables?: ListApsLifecycleStrategyResponseBodyItemsOperationTables[];
  /**
   * @remarks
   * The status of the lifecycle management policy. Valid values:
   * 
   * 1.  on: enables the current policy.
   * 2.  off: disables the current policy.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The number of databases that are managed during the lifecycle management.
   * 
   * @example
   * 5
   */
  strategyDatabases?: number;
  /**
   * @remarks
   * The description of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyDesc?: string;
  /**
   * @remarks
   * The name of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The number of tables that are managed during the lifecycle management.
   * 
   * @example
   * 5
   */
  strategyTables?: number;
  /**
   * @remarks
   * The type of the lifecycle management policy.
   * 
   * @example
   * KEEP_BY_TIME
   */
  strategyType?: string;
  /**
   * @remarks
   * The value of the lifecycle management policy.
   * 
   * @example
   * 10
   */
  strategyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      modifiedTime: 'ModifiedTime',
      operationTables: 'OperationTables',
      status: 'Status',
      strategyDatabases: 'StrategyDatabases',
      strategyDesc: 'StrategyDesc',
      strategyName: 'StrategyName',
      strategyTables: 'StrategyTables',
      strategyType: 'StrategyType',
      strategyValue: 'StrategyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      createdTime: 'string',
      DBClusterId: 'string',
      modifiedTime: 'string',
      operationTables: { 'type': 'array', 'itemType': ListApsLifecycleStrategyResponseBodyItemsOperationTables },
      status: 'string',
      strategyDatabases: 'number',
      strategyDesc: 'string',
      strategyName: 'string',
      strategyTables: 'number',
      strategyType: 'string',
      strategyValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTables)) {
      $dara.Model.validateArray(this.operationTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

