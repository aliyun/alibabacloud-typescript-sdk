// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSFabricChannelResponseBodyData extends $dara.Model {
  baaSFabricChannelId?: string;
  baaSFabricChannelName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricChannelId: 'BaaSFabricChannelId',
      baaSFabricChannelName: 'BaaSFabricChannelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricChannelId: 'string',
      baaSFabricChannelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaaSFabricChannelResponseBody extends $dara.Model {
  code?: string;
  data?: ListBaaSFabricChannelResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListBaaSFabricChannelResponseBodyData },
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

