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
   * Batch1
   */
  batchName?: string;
  /**
   * @remarks
   * The interval between release batches.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The dimension for asset selection. Valid values:
   * 
   * - **0**: server instance
   * - **1**: server group
   * - **2**: VPC-connected instance ID
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The target version to which you want to upgrade.
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

