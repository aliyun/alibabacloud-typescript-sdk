// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPublishBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the release batch.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  batchName?: string;
  /**
   * @remarks
   * The interval between two release batches.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The dimension based on which the asset is selected. Valid values:
   * 
   * *   **0**: selects the asset by instance.
   * *   **1**: selects the asset by machine group.
   * *   **2**: selects the asset by the ID of the instance that is deployed in the virtual private cloud (VPC).
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The version to which you want to upgrade the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.9
   */
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      batchName: 'BatchName',
      interval: 'Interval',
      operationBase: 'OperationBase',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchName: 'string',
      interval: 'number',
      operationBase: 'number',
      upgradeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

