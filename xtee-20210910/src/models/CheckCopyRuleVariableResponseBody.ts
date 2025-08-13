// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckCopyRuleVariableResponseBodyResultObjectMessage extends $dara.Model {
  /**
   * @remarks
   * Primary key ID of the variable
   * 
   * @example
   * 213
   */
  id?: number;
  /**
   * @remarks
   * Name of the variable
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Title of the variable
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Type of the variable
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCopyRuleVariableResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Information.
   */
  message?: CheckCopyRuleVariableResponseBodyResultObjectMessage[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': CheckCopyRuleVariableResponseBodyResultObjectMessage },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCopyRuleVariableResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
   */
  resultObject?: CheckCopyRuleVariableResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: CheckCopyRuleVariableResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

