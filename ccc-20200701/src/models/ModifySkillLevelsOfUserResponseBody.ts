// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySkillLevelsOfUserResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * E49D8B83-A3EC-44D4-A920-578BC3C698AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

