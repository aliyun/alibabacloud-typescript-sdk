// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqGroup extends $dara.Model {
  env?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: string;
  id?: number;
  messageType?: number;
  protocolType?: string;
  remark?: string;
  requestId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      id: 'id',
      messageType: 'messageType',
      protocolType: 'protocolType',
      remark: 'remark',
      requestId: 'requestId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'string',
      id: 'number',
      messageType: 'number',
      protocolType: 'string',
      remark: 'string',
      requestId: 'string',
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

