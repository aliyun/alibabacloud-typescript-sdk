// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRandomPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The generated random password.
   * 
   * @example
   * IxGn>NMmNB(y?iZ<Yc,_H/{2GC\\"U****
   */
  randomPassword?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6b0cbe25-5e33-467e-972e-7a83c6c97604
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      randomPassword: 'RandomPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      randomPassword: 'string',
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

