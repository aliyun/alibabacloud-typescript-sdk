// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnResponseBodySecretBindDTO extends $dara.Model {
  /**
   * @remarks
   * The extension number.
   * 
   * > The BindAxn operation does not involve extension numbers. Ignore this parameter.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The privacy number, which is Number X.
   * 
   * @example
   * 139****1111
   */
  secretNo?: string;
  /**
   * @remarks
   * The ID of the binding relationship.
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

export class BindAxnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The struct returned after the number is successfully bound.
   */
  secretBindDTO?: BindAxnResponseBodySecretBindDTO;
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
      secretBindDTO: BindAxnResponseBodySecretBindDTO,
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

