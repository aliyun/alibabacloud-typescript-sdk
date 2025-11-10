// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerConnectionsRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @example
   * test1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      liteTopicName: 'liteTopicName',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liteTopicName: 'string',
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

