// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustVariableResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The failure type.
   * 
   * @example
   * rule
   */
  failType?: string;
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      failType: 'failType',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failType: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustVariableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
   */
  resultObject?: ModifyCustVariableResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': ModifyCustVariableResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

