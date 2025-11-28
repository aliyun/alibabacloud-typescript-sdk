// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSAntChainResponseBodyData extends $dara.Model {
  baaSAntChainChainId?: string;
  baaSAntChainChainName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSAntChainChainId: 'BaaSAntChainChainId',
      baaSAntChainChainName: 'BaaSAntChainChainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSAntChainChainId: 'string',
      baaSAntChainChainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaaSAntChainResponseBody extends $dara.Model {
  code?: string;
  data?: ListBaaSAntChainResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListBaaSAntChainResponseBodyData },
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

