// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxgResponseBodySecretBindDTO extends $dara.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * >  The BindAxg operation does not involve an extension. Ignore this parameter.
   * 
   * @example
   * 139****0000
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the phone numbers were bound.
   */
  secretBindDTO?: BindAxgResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxgResponseBodySecretBindDTO,
    };
  }

  validate() {
    if(this.secretBindDTO && typeof (this.secretBindDTO as any).validate === 'function') {
      (this.secretBindDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

