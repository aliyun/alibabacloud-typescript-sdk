// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { APIKeyAuthParameter } from "./ApikeyAuthParameter";


export class AuthorizationParameters extends $dara.Model {
  apiKeyParameter?: APIKeyAuthParameter;
  static names(): { [key: string]: string } {
    return {
      apiKeyParameter: 'apiKeyParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyParameter: APIKeyAuthParameter,
    };
  }

  validate() {
    if(this.apiKeyParameter && typeof (this.apiKeyParameter as any).validate === 'function') {
      (this.apiKeyParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Authorization extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parameters?: AuthorizationParameters;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APIKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: AuthorizationParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

