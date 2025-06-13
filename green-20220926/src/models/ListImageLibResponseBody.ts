// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListImageLibResponseBodyLibList } from "./ListImageLibResponseBodyLibList";


export class ListImageLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  libList?: ListImageLibResponseBodyLibList[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      libList: 'LibList',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      libList: { 'type': 'array', 'itemType': ListImageLibResponseBodyLibList },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.libList)) {
      $dara.Model.validateArray(this.libList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

