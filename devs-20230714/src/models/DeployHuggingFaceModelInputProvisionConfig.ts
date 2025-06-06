// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHuggingFaceModelInputProvisionConfigScheduledActions } from "./DeployHuggingFaceModelInputProvisionConfigScheduledActions";


export class DeployHuggingFaceModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployHuggingFaceModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployHuggingFaceModelInputProvisionConfigScheduledActions },
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

