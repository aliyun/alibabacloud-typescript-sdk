// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApiKeysResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  expiresAt?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  keyHash?: string;
  /**
   * @example
   * 1
   */
  keyId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'expiresAt',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      keyHash: 'keyHash',
      keyId: 'keyId',
      status: 'status',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      keyHash: 'string',
      keyId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApiKeysResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: QueryApiKeysResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  retryAble?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryApiKeysResponseBodyData },
      message: 'string',
      retryAble: 'boolean',
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

