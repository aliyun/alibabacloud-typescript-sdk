// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupCredentialsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * app_group_123
   */
  appGroupId?: number;
  enabled?: boolean;
  /**
   * @example
   * generated_token_string
   */
  token?: string;
  /**
   * @example
   * api-token
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      enabled: 'enabled',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      enabled: 'boolean',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupCredentialsResponseBody extends $dara.Model {
  /**
   * @example
   * 1-2-3-4
   */
  requestId?: string;
  result?: CreateAppGroupCredentialsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppGroupCredentialsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

