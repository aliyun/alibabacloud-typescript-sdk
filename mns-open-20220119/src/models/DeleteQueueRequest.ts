// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * tf-testAccMNSQueue-525478433321945943
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

