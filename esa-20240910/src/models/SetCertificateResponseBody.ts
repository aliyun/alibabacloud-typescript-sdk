// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * babaffe176ae44e2ad16d3e309b9e506
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

