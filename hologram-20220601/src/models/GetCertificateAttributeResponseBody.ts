// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateAttributeResponseBodyCertificateAttributeDto extends $dara.Model {
  /**
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @example
   * 1790583135000
   */
  expirationTime?: number;
  /**
   * @example
   * effective
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enableSSL: 'enableSSL',
      expirationTime: 'expirationTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSSL: 'boolean',
      expirationTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateAttributeResponseBody extends $dara.Model {
  certificateAttributeDto?: GetCertificateAttributeResponseBodyCertificateAttributeDto;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateAttributeDto: 'CertificateAttributeDto',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateAttributeDto: GetCertificateAttributeResponseBodyCertificateAttributeDto,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificateAttributeDto && typeof (this.certificateAttributeDto as any).validate === 'function') {
      (this.certificateAttributeDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

