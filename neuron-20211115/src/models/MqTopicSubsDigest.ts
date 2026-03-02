// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqTopicSubsDigest extends $dara.Model {
  messageModel?: string;
  serviceId?: string;
  serviceName?: string;
  subsExpression?: string;
  static names(): { [key: string]: string } {
    return {
      messageModel: 'MessageModel',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      subsExpression: 'SubsExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageModel: 'string',
      serviceId: 'string',
      serviceName: 'string',
      subsExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

