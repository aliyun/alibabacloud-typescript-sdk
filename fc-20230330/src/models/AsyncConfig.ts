// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DestinationConfig } from "./DestinationConfig";


export class AsyncConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  asyncTask?: boolean;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  destinationConfig?: DestinationConfig;
  /**
   * @example
   * acs:fc:cn-shanghai:1234/functions/my-func
   */
  functionArn?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * 3600
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
      createdTime: 'createdTime',
      destinationConfig: 'destinationConfig',
      functionArn: 'functionArn',
      lastModifiedTime: 'lastModifiedTime',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTask: 'boolean',
      createdTime: 'string',
      destinationConfig: DestinationConfig,
      functionArn: 'string',
      lastModifiedTime: 'string',
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

