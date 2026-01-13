// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRecallManagementTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * Merge
   */
  mode?: string;
  partition?: { [key: string]: string };
  /**
   * @example
   * false
   */
  skipThresholdCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      partition: 'Partition',
      skipThresholdCheck: 'SkipThresholdCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      partition: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skipThresholdCheck: 'boolean',
    };
  }

  validate() {
    if(this.partition) {
      $dara.Model.validateMap(this.partition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

