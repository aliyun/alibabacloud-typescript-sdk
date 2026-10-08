// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRCInstancesShrinkRequest extends $dara.Model {
  batchOptimization?: string;
  forceReboot?: boolean;
  instanceIdsShrink?: string;
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
      instanceIdsShrink: 'InstanceIds',
      rebootTime: 'RebootTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceReboot: 'boolean',
      instanceIdsShrink: 'string',
      rebootTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

