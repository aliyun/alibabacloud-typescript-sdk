// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MNSTopicTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The filtering tag. Function execution is triggered only when a message that contains the specified filter tag is received.
   * 
   * @example
   * serverless
   */
  filterTag?: string;
  /**
   * @remarks
   * The format of the event content. The following two formats are supported:
   * 
   * *   **JSON**
   * *   **STREAM**
   * 
   * >  The default format is STREAM.
   * 
   * @example
   * JSON
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry policy.
   * 
   * *   **BACKOFF_RETRY**: a backoff retry policy. A total of 3 retries are made. The interval between 2 retries is a random value between 10 and 20 seconds. This is the default value.
   * *   **EXPONENTIAL_DECAY_RETRY**: an exponential decay retry policy. A total of 176 retries are made, with the interval of each retry increases exponentially to 512 seconds, and the total retry period is 1 day. The interval between two consecutive retries exponentially increases to a maximum of 512 seconds. For example, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512... 512. The number of 512s is 167.
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      filterTag: 'filterTag',
      notifyContentFormat: 'notifyContentFormat',
      notifyStrategy: 'notifyStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

