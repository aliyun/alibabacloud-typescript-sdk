// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstancesShrinkRequest extends $dara.Model {
  batchOptimization?: string;
  forceStop?: boolean;
  instanceIdsShrink?: string;
  regionId?: string;
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      forceStop: 'ForceStop',
      instanceIdsShrink: 'InstanceIds',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceStop: 'boolean',
      instanceIdsShrink: 'string',
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

