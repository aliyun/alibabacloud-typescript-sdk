// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegisterCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The registration code of the CA certificate.
   * 
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registerCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

