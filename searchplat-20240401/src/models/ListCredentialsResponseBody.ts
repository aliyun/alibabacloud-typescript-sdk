// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123123
   */
  appGroupId?: number;
  /**
   * @remarks
   * Indicates whether the credential is enabled. Valid values:
   * 
   * - true: Enabled.
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
   * OS-****
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

export class ListCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 33E4F0CA-F766-5803-B11C-70DC57A5A6E4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListCredentialsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCredentialsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

