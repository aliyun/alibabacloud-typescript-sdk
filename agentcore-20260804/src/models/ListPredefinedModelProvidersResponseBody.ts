// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPredefinedModelProvidersResponseBodyData extends $dara.Model {
  defaultEndpoint?: string;
  defaultProtocol?: string;
  displayName?: string;
  providerType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultEndpoint: 'defaultEndpoint',
      defaultProtocol: 'defaultProtocol',
      displayName: 'displayName',
      providerType: 'providerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultEndpoint: 'string',
      defaultProtocol: 'string',
      displayName: 'string',
      providerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedModelProvidersResponseBody extends $dara.Model {
  code?: string;
  data?: ListPredefinedModelProvidersResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPredefinedModelProvidersResponseBodyData },
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

