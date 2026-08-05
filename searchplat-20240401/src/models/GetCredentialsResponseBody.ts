// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 111111
   */
  appGroupId?: number;
  /**
   * @remarks
   * Indicates whether the credential is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The access credential token.
   * 
   * @example
   * OS-********
   */
  token?: string;
  /**
   * @remarks
   * The credential type.
   * 
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

export class GetCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B7C901ED-2BC1-5CFB-BE23-242DE5E3BA5C
   */
  requestId?: string;
  /**
   * @remarks
   * The query result.
   */
  result?: GetCredentialsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetCredentialsResponseBodyResult,
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

