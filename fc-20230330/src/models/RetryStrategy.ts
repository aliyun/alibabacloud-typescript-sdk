// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryStrategy extends $dara.Model {
  /**
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

