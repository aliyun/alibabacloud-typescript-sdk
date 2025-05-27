// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataRunOptionsRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum period of time during which retries are performed.
   * 
   * @example
   * 512
   */
  maximumEventAgeInSeconds?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 2
   */
  maximumRetryAttempts?: number;
  /**
   * @remarks
   * The retry policy. Valid values: BACKOFFRETRY and EXPONENTIALDECAY_RETRY.
   * 
   * @example
   * BACKOFFRETRY
   */
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

