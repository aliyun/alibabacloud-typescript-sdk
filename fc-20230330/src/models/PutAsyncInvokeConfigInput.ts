// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DestinationConfig } from "./DestinationConfig";


export class PutAsyncInvokeConfigInput extends $dara.Model {
  /**
   * @example
   * true
   */
  asyncTask?: boolean;
  destinationConfig?: DestinationConfig;
  /**
   * @example
   * 300
   */
  maxAsyncEventAgeInSeconds?: number;
  /**
   * @example
   * 3
   */
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
      destinationConfig: DestinationConfig,
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

