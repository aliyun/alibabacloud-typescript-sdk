// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSAntChainConsortiumResponseBodyData extends $dara.Model {
  baaSAntChainConsortiumId?: string;
  baaSAntChainConsortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSAntChainConsortiumId: 'BaaSAntChainConsortiumId',
      baaSAntChainConsortiumName: 'BaaSAntChainConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSAntChainConsortiumId: 'string',
      baaSAntChainConsortiumName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaaSAntChainConsortiumResponseBody extends $dara.Model {
  code?: string;
  data?: ListBaaSAntChainConsortiumResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListBaaSAntChainConsortiumResponseBodyData },
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

