// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqGroupCreateCmd extends $dara.Model {
  env?: string;
  laneId?: number;
  laneName?: string;
  messageType?: number;
  protocolType?: string;
  remark?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      laneId: 'laneId',
      laneName: 'laneName',
      messageType: 'messageType',
      protocolType: 'protocolType',
      remark: 'remark',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      laneId: 'number',
      laneName: 'string',
      messageType: 'number',
      protocolType: 'string',
      remark: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

