// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicResponseBody extends $dara.Model {
  /**
   * @example
   * 2026020210000022c53d0b06900170
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * test01
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

