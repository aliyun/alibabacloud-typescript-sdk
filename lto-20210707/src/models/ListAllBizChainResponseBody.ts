// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllBizChainResponseBodyData extends $dara.Model {
  bizChainId?: string;
  name?: string;
  usedOnchainCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      name: 'Name',
      usedOnchainCount: 'UsedOnchainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      name: 'string',
      usedOnchainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllBizChainResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllBizChainResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAllBizChainResponseBodyData },
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

