// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstancesRequest extends $dara.Model {
  batchOptimization?: string;
  forceStop?: boolean;
  instanceIds?: string[];
  regionId?: string;
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      forceStop: 'ForceStop',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceStop: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stoppedMode: 'string',
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

