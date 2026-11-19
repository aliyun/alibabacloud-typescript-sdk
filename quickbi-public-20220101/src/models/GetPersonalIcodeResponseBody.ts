// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPersonalICodeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * SK
   * 
   * @example
   * V2Yc/dMFWBwTKLNCNxgnN****z***5ARu
   */
  icode?: string;
  /**
   * @remarks
   * AK
   * 
   * @example
   * asdasd
   */
  icodeKey?: string;
  /**
   * @remarks
   * The AccessKey type. Currently, only the value 1 is supported, which indicates a personal AccessKey.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      icode: 'Icode',
      icodeKey: 'IcodeKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icode: 'string',
      icodeKey: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonalICodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * The AccessKey model.
   * 
   * @example
   * {
   *         "icode": "V2Yc/dMFWBwTKLNCNxgnN****z***5ARu",
   *         "icodeKey": "b6f3***32a62936",
   *         "type": 1
   *     }
   */
  result?: GetPersonalICodeResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetPersonalICodeResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

