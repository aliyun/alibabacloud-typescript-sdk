// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMacRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm used to generate the message authentication code. Valid values vary based on the key specification:  
   * 
   * - HMAC_SM3
   * 
   * - HMAC_SHA_224
   * 
   * - HMAC_SHA_256
   * 
   * - HMAC_SHA_384
   * 
   * - HMAC_SHA_512
   * 
   * This parameter is required.
   * 
   * @example
   * HMAC_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable DryRun mode. Valid values:
   * - true: enables DryRun mode.
   * - false (default): disables DryRun mode.
   * 
   * DryRun mode is used to test API calls and verify whether you have the required permissions on the corresponding resources and whether the request parameters are correctly configured. When DryRun mode is enabled, KMS always returns a failure and provides the failure reason. Failure reasons include:
   * - DryRunOperationError: The request would succeed if the DryRun parameter is not specified.
   * - ValidationError: The parameters specified in the request are invalid.
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify a key alias or key Amazon Resource Name (ARN). For more information about aliases, refer to [Manage key aliases](https://help.aliyun.com/document_detail/480655.html).
   * >To access a key in a different Alibaba Cloud account, you must specify the key ARN. The key ARN is in the format of `acs:kms:${region}:${account}:key/${keyid}`.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The Base64-encoding message authentication code to verify.
   * 
   * This parameter is required.
   * 
   * @example
   * vz1Snp+jGJbgydCFRWVWxAwIMdyfKCSp+jnMWQ==
   */
  mac?: string;
  /**
   * @remarks
   * The original message data.  
   * 
   * Use Base64 encoding. For example, if the hexadecimal content of the message for which you want to generate a message authentication code is `[0x31, 0x32, 0x33, 0x34]`, the corresponding Base64-encoded value is `MTIzNA==`.
   * 
   * This parameter is required.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      mac: 'Mac',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      dryRun: 'string',
      keyId: 'string',
      mac: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

