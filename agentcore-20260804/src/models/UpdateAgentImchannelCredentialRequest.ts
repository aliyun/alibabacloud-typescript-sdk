// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentIMChannelCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The channel credentials. All fields must be provided and the field values must be non-empty strings. For DingTalk, use clientID and clientSecret. For Lark, use appId and appSecret. For WeCom, use botId and secret.
   * 
   * This parameter is required.
   */
  credential?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      credential: 'credential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.credential) {
      $dara.Model.validateMap(this.credential);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentIMChannelCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateAgentIMChannelCredentialRequestBody;
  /**
   * @remarks
   * The reserved idempotence token. The backend does not provide persistent idempotence guarantees in the current phase.
   * 
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAgentIMChannelCredentialRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

