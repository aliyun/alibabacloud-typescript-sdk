// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The message ID of the DataWorks open message. After an extension point event is triggered, you can obtain the message ID from the received event message.
   * 
   * <props="china">For the message format, refer to [Message format](https://help.aliyun.com/document_detail/215367.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed67****1
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can obtain the workspace ID by parsing the DataWorks open message.
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

