// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MNS extends $dara.Model {
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

