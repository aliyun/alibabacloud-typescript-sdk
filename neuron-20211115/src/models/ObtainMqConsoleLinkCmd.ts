// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainMqConsoleLinkCmd extends $dara.Model {
  env?: string;
  groupType?: string;
  mqGroupId?: string;
  pbcId?: number;
  serviceName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      groupType: 'groupType',
      mqGroupId: 'mqGroupId',
      pbcId: 'pbcId',
      serviceName: 'serviceName',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      groupType: 'string',
      mqGroupId: 'string',
      pbcId: 'number',
      serviceName: 'string',
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

