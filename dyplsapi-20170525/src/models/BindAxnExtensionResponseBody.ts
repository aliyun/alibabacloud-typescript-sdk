// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnExtensionResponseBodySecretBindDTO extends $dara.Model {
  /**
   * @remarks
   * The extension number.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The privacy number, which is number X.
   * 
   * @example
   * 139*****1111
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding relationship ID.
   * 
   * @example
   * 1***************3
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

export class BindAxnExtensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * * A value of OK indicates that the request is successful.
   * * For other error codes, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * 9297B722-A016-43FB-B51A-E54050D9369D
   */
  requestId?: string;
  /**
   * @remarks
   * The struct returned upon successful binding.
   */
  secretBindDTO?: BindAxnExtensionResponseBodySecretBindDTO;
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
      secretBindDTO: BindAxnExtensionResponseBodySecretBindDTO,
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

