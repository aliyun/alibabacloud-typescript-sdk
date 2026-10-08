// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRCInstancesRequest extends $dara.Model {
  batchOptimization?: string;
  forceReboot?: boolean;
  instanceIds?: string[];
  /**
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      forceReboot: 'ForceReboot',
      instanceIds: 'InstanceIds',
      rebootTime: 'RebootTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceReboot: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      rebootTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

