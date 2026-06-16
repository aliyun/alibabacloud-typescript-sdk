// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetUserResponseBodyApiKeys extends $dara.Model {
  apiKey?: string;
  innerApiKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      innerApiKey: 'InnerApiKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      innerApiKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $dara.Model {
  anthropicHost?: string;
  apiKeys?: GetUserResponseBodyApiKeys[];
  appId?: string;
  code?: string;
  dashscopeHost?: string;
  host?: string;
  innerToken?: string;
  message?: string;
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      anthropicHost: 'AnthropicHost',
      apiKeys: 'ApiKeys',
      appId: 'AppId',
      code: 'Code',
      dashscopeHost: 'DashscopeHost',
      host: 'Host',
      innerToken: 'InnerToken',
      message: 'Message',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anthropicHost: 'string',
      apiKeys: { 'type': 'array', 'itemType': GetUserResponseBodyApiKeys },
      appId: 'string',
      code: 'string',
      dashscopeHost: 'string',
      host: 'string',
      innerToken: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

