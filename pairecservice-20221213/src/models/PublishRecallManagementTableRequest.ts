// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRecallManagementTableRequest extends $dara.Model {
  /**
   * @remarks
   * **The instance ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * **The synchronization mode.** Valid values:
   * 
   * - `Merge`: Adds new data and updates existing data.
   * 
   * @example
   * Merge
   */
  mode?: string;
  /**
   * @remarks
   * The table partitions to publish.
   */
  partition?: { [key: string]: string };
  /**
   * @remarks
   * The table partitions to publish.
   */
  partitions?: { [key: string]: string };
  /**
   * @remarks
   * **Specifies whether to skip the threshold check during table synchronization.**
   * 
   * @example
   * false
   */
  skipThresholdCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      partition: 'Partition',
      partitions: 'Partitions',
      skipThresholdCheck: 'SkipThresholdCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      partition: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skipThresholdCheck: 'boolean',
    };
  }

  validate() {
    if(this.partition) {
      $dara.Model.validateMap(this.partition);
    }
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

