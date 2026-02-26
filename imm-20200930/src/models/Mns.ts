// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MNS extends $dara.Model {
  /**
   * @remarks
   * The SMQ topic. You can check topics within a region in the [SMQ console](https://mns.console.aliyun.com/). This parameter is required if you want to use SMQ for notifications.
   * 
   * @example
   * topic1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

