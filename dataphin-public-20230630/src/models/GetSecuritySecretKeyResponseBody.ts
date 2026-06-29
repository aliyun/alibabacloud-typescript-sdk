// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySecretKeyResponseBodySecuritySecretKeyInfo extends $dara.Model {
  /**
   * @remarks
   * The algorithm type. Valid values: AES, DES, DESEDE, SM2, SM4, RSA, and FF1.
   * 
   * @example
   * AES
   */
  algorithmType?: string;
  /**
   * @remarks
   * The alias of the algorithm type.
   * 
   * @example
   * AES
   */
  algorithmTypeAlias?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether OpenAPI query is supported.
   */
  enableOpenapiQuery?: boolean;
  /**
   * @remarks
   * The generation method. Valid values:
   * - SYSTEM_GENERATION: system-generated.
   * - USER_GENERATION: user-generated.
   * 
   * @example
   * SYSTEM_GENERATION
   */
  generationType?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether only the owner can manage the key.
   */
  isOwnerManageOnly?: boolean;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The owner name.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The key values.
   */
  secretKeyList?: string[];
  /**
   * @remarks
   * The number of sub-keys.
   * 
   * @example
   * 2
   */
  subKeyCount?: number;
  /**
   * @remarks
   * The key type. Valid values:
   * - HASH: hashing and masking.
   * - ENCRYPT: encryption and decryption.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
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
  /**
   * @remarks
   * The security key details.
   */
  securitySecretKeyInfo?: GetSecuritySecretKeyResponseBodySecuritySecretKeyInfo;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

