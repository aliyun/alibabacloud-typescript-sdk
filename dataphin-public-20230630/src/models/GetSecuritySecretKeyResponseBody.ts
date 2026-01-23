// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySecretKeyResponseBodySecuritySecretKeyInfo extends $dara.Model {
  /**
   * @example
   * AES
   */
  algorithmType?: string;
  /**
   * @example
   * AES
   */
  algorithmTypeAlias?: string;
  /**
   * @example
   * test
   */
  description?: string;
  enableOpenapiQuery?: boolean;
  /**
   * @example
   * SYSTEM_GENERATION
   */
  generationType?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  isOwnerManageOnly?: boolean;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  secretKeyList?: string[];
  /**
   * @example
   * 2
   */
  subKeyCount?: number;
  /**
   * @example
   * HASH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmType: 'AlgorithmType',
      algorithmTypeAlias: 'AlgorithmTypeAlias',
      description: 'Description',
      enableOpenapiQuery: 'EnableOpenapiQuery',
      generationType: 'GenerationType',
      id: 'Id',
      isOwnerManageOnly: 'IsOwnerManageOnly',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      secretKeyList: 'SecretKeyList',
      subKeyCount: 'SubKeyCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmType: 'string',
      algorithmTypeAlias: 'string',
      description: 'string',
      enableOpenapiQuery: 'boolean',
      generationType: 'string',
      id: 'number',
      isOwnerManageOnly: 'boolean',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      secretKeyList: { 'type': 'array', 'itemType': 'string' },
      subKeyCount: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.secretKeyList)) {
      $dara.Model.validateArray(this.secretKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySecretKeyResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  securitySecretKeyInfo?: GetSecuritySecretKeyResponseBodySecuritySecretKeyInfo;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      securitySecretKeyInfo: 'SecuritySecretKeyInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      securitySecretKeyInfo: GetSecuritySecretKeyResponseBodySecuritySecretKeyInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.securitySecretKeyInfo && typeof (this.securitySecretKeyInfo as any).validate === 'function') {
      (this.securitySecretKeyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

