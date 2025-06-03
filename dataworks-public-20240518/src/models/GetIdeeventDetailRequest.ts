// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The message ID in DataWorks OpenEvent. You can obtain the ID from a received message when an extension point event is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed67****1
   */
  messageId?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can obtain the ID from the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

