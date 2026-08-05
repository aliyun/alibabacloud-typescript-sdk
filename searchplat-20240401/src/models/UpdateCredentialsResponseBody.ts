// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12321321
   */
  appGroupId?: number;
  /**
   * @remarks
   * Specifies whether the credential is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The access credential token.
   * 
   * @example
   * OS-****
   */
  token?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - api-token.
   * 
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

export class UpdateCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateCredentialsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateCredentialsResponseBodyResult,
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

