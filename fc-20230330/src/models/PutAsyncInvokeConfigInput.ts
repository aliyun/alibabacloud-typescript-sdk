// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DestinationConfig } from "./DestinationConfig";


export class PutAsyncInvokeConfigInput extends $dara.Model {
  /**
   * @remarks
   * Optional. Specify whether to enable the asynchronous task feature.
   * 
   * @example
   * true
   */
  asyncTask?: boolean;
  /**
   * @remarks
   * Optional. The struct of the destination of asynchronous invocations.
   */
  destinationConfig?: DestinationConfig;
  /**
   * @remarks
   * Optional. The maximum validity period of a message. Valid values: [1,604800]. Default value: 86400. Unit: seconds.
   * 
   * @example
   * 300
   */
  maxAsyncEventAgeInSeconds?: number;
  /**
   * @remarks
   * Optional. The maximum number of retries if an asynchronous invocation fails. Valid values: [0,8]. If you do not configure this parameter, the default number of retries is 3.
   * 
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

