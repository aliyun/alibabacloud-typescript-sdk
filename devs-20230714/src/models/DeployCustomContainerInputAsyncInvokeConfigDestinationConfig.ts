// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure } from "./DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure";
import { DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess } from "./DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess";


export class DeployCustomContainerInputAsyncInvokeConfigDestinationConfig extends $dara.Model {
  onFailure?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure;
  onSuccess?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess;
  static names(): { [key: string]: string } {
    return {
      onFailure: 'onFailure',
      onSuccess: 'onSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onFailure: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure,
      onSuccess: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess,
    };
  }

  validate() {
    if(this.onFailure && typeof (this.onFailure as any).validate === 'function') {
      (this.onFailure as any).validate();
    }
    if(this.onSuccess && typeof (this.onSuccess as any).validate === 'function') {
      (this.onSuccess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

