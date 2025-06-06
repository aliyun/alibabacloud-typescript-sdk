// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputAsyncInvokeConfigDestinationConfig } from "./DeployCustomContainerInputAsyncInvokeConfigDestinationConfig";


export class DeployCustomContainerInputAsyncInvokeConfig extends $dara.Model {
  asyncTask?: boolean;
  destinationConfig?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfig;
  maxAsyncEventAgeInSeconds?: number;
  maxAsyncRetryAttempts?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTask: 'asyncTask',
      destinationConfig: 'destinationConfig',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTask: 'boolean',
      destinationConfig: DeployCustomContainerInputAsyncInvokeConfigDestinationConfig,
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
    };
  }

  validate() {
    if(this.destinationConfig && typeof (this.destinationConfig as any).validate === 'function') {
      (this.destinationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

