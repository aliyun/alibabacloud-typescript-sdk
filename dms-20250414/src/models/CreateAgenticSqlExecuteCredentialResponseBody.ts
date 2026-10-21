// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSqlExecuteCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the credential.
   * 
   * @example
   * ak_xxxxxxxx
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the credential. This value is returned only once when the credential is created. Keep it secure.
   * 
   * @example
   * xxxxxxxx
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-bp1xxxxxxxx
   */
  catalogName?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 9f8e7d6c-xxxx-xxxx-xxxx-1a2b3c4d5e6f
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the database. If the credential is at the instance level, this value is empty.
   * 
   * @example
   * 6c4e8a2b-xxxx-xxxx-xxxx-0f1d2e3c4b5a
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The expiration time of the credential. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-10-13 12:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The total number of connections supported by the credential.
   * 
   * @example
   * 500
   */
  maxConnectTimes?: number;
  /**
   * @remarks
   * The fully qualified name of the database. If the credential is at the instance level, this value is empty.
   * 
   * @example
   * test_db
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      catalogName: 'CatalogName',
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      expireTime: 'ExpireTime',
      maxConnectTimes: 'MaxConnectTimes',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      catalogName: 'string',
      catalogUuid: 'string',
      databaseUuid: 'string',
      expireTime: 'string',
      maxConnectTimes: 'number',
      qualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgenticSqlExecuteCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary credential information.
   */
  data?: CreateAgenticSqlExecuteCredentialResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.                                 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAgenticSqlExecuteCredentialResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

