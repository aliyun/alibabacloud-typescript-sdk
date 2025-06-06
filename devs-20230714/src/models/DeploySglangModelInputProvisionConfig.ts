// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploySGLangModelInputProvisionConfigScheduledActions } from "./DeploySglangModelInputProvisionConfigScheduledActions";


export class DeploySGLangModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeploySGLangModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeploySGLangModelInputProvisionConfigScheduledActions },
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

