// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceGroupAuthorizedBizChainResponseBodyData extends $dara.Model {
  authorized?: boolean;
  bizChainId?: string;
  bizChainName?: string;
  blockChainType?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      bizChainId: 'BizChainId',
      bizChainName: 'BizChainName',
      blockChainType: 'BlockChainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      bizChainId: 'string',
      bizChainName: 'string',
      blockChainType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupAuthorizedBizChainResponseBody extends $dara.Model {
  code?: string;
  data?: ListDeviceGroupAuthorizedBizChainResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDeviceGroupAuthorizedBizChainResponseBodyData },
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

