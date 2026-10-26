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
   * **The enumeration value for the table synchronization mode**:
   * - `Merge`: Merge.
   * 
   * @example
   * Merge
   */
  mode?: string;
  /**
   * @remarks
   * The partition of the table to be published.
   */
  partition?: { [key: string]: string };
  /**
   * @remarks
   * The partition of the table to be published.
   */
  partitions?: { [key: string]: string };
  /**
   * @remarks
   * **Specifies whether to skip the threshold check when synchronizing the table.**
   * 
   * @example
   * false
   */
  skipThresholdCheck?: boolean;
  /**
   * @remarks
   * The start time of incremental data playback (UNIX milliseconds).
   * 
   * @example
   * 1792512000000
   */
  startTimestampMs?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      partition: 'Partition',
      partitions: 'Partitions',
      skipThresholdCheck: 'SkipThresholdCheck',
      startTimestampMs: 'StartTimestampMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      partition: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skipThresholdCheck: 'boolean',
      startTimestampMs: 'number',
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

