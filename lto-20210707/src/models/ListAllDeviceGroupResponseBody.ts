// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllDeviceGroupResponseBodyData extends $dara.Model {
  deviceGroupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllDeviceGroupResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllDeviceGroupResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAllDeviceGroupResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

