// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePersonalICodeResponseBodyResult extends $dara.Model {
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
   * b6f3***32a62936
   */
  icodeKey?: string;
  /**
   * @remarks
   * The AK type. Currently, only the value 1 is supported, which indicates a personal AK.
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

export class UpdatePersonalICodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 685072a0-1fd5-40ef-ae6b-cf94e79e718f
   */
  requestId?: string;
  /**
   * @remarks
   * The AK model.
   * 
   * @example
   * {
   *         "icode": "V2Yc/dMFWBwTKLNCNxgnN****z***5ARu",
   *         "icodeKey": "b6f3***32a62936",
   *         "type": 1
   *     }
   */
  result?: UpdatePersonalICodeResponseBodyResult;
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
      result: UpdatePersonalICodeResponseBodyResult,
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

