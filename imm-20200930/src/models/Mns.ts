// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MNS extends $dara.Model {
  /**
   * @remarks
   * Specifies the name of the ApsaraMQ for MNS topic, which can be found in the topic list for the current region in the left-side navigation pane of the [ApsaraMQ for MNS console](https://mns.console.aliyun.com/). This parameter is required for ApsaraMQ for MNS message notification.
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

