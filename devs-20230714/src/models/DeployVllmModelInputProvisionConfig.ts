// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployVllmModelInputProvisionConfigScheduledActions } from "./DeployVllmModelInputProvisionConfigScheduledActions";


export class DeployVllmModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployVllmModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployVllmModelInputProvisionConfigScheduledActions },
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

