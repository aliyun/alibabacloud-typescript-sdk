// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The retry policy. Valid values:
   * 
   * *   **BACKOFF_RETRY**: retries with a fixed backoff interval.
   * *   **EXPONENTIAL_DECAY_RETRY**: retries with exponential backoff.
   * 
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

