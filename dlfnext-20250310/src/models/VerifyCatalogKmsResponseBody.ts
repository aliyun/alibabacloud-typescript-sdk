// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCatalogKmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the validation fails. An empty string is returned when the validation is successful.
   * 
   * @example
   * KeyNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the failure cause and remediation suggestions returned when the validation fails. An empty string is returned when the validation is successful.
   * 
   * @example
   * The specified parameter KMS keyId is not found.
   */
  hint?: string;
  /**
   * @remarks
   * The KMS key identifier actually used by the probe object. When the validation is successful, this corresponds to the customer master key (CMK) specified in the request.
   * 
   * @example
   * key-1234567890abcdef
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The server-side encryption method actually used by the probe object. Returns KMS when the validation is successful.
   * 
   * @example
   * KMS
   */
  serverSideEncryption?: string;
  /**
   * @remarks
   * Indicates whether the validation is successful. A value of true indicates that the write probe succeeded and the SSE-KMS configuration of the object meets expectations. A value of false indicates that the validation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      hint: 'hint',
      kmsKeyId: 'kmsKeyId',
      serverSideEncryption: 'serverSideEncryption',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hint: 'string',
      kmsKeyId: 'string',
      serverSideEncryption: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

