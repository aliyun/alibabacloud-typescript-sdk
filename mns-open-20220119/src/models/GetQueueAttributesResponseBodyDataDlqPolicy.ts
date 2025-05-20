// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueAttributesResponseBodyDataDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The queue to which dead-letter messages are delivered.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter message delivery.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 3
   */
  maxReceiveCount?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetQueue: 'DeadLetterTargetQueue',
      enabled: 'Enabled',
      maxReceiveCount: 'MaxReceiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetQueue: 'string',
      enabled: 'boolean',
      maxReceiveCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

