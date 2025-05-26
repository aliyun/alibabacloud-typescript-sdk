// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RocketMQ extends $dara.Model {
  instanceId?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

