// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the topic that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * tf-testAccMNSTopic-112965059402264645
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

