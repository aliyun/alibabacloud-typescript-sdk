// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSceneResponseBody extends $dara.Model {
  /**
   * @example
   * 95E6F720-6786-53BD-9982-C9A636CEA627
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {\\"code\\":\\"200\\",\\"RequestId\\":\\"B946877A-8BDC-55AD-BE7E-85B75B2527E5\\",\\"data\\":true}
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

