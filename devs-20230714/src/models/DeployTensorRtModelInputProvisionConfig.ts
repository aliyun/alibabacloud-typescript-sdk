// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployTensorRtModelInputProvisionConfigScheduledActions } from "./DeployTensorRtModelInputProvisionConfigScheduledActions";


export class DeployTensorRtModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployTensorRtModelInputProvisionConfigScheduledActions[];
  target?: number;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      scheduledActions: 'scheduledActions',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateGPU: 'boolean',
      scheduledActions: { 'type': 'array', 'itemType': DeployTensorRtModelInputProvisionConfigScheduledActions },
      target: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

