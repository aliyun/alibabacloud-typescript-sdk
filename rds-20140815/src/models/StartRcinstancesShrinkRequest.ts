// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRCInstancesShrinkRequest extends $dara.Model {
  batchOptimization?: string;
  instanceIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      instanceIdsShrink: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      instanceIdsShrink: 'string',
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

