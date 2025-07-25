// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustDevicesResponseBodyData extends $dara.Model {
  model?: string;
  serialNo?: string;
  tenantId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      serialNo: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustDevicesResponseBody extends $dara.Model {
  code?: string;
  data?: ListTrustDevicesResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTrustDevicesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

