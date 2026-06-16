// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnalysisColumnListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Indicates whether the column is a default column.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  variableName?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * 年龄
   */
  variableTitle?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * NATIVE
   */
  variableType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'eventCode',
      eventName: 'eventName',
      isDefault: 'isDefault',
      variableName: 'variableName',
      variableTitle: 'variableTitle',
      variableType: 'variableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      isDefault: 'boolean',
      variableName: 'string',
      variableTitle: 'string',
      variableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnalysisColumnListResponseBody extends $dara.Model {
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
   * The returned object.
   */
  resultObject?: DescribeAnalysisColumnListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAnalysisColumnListResponseBodyResultObject },
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

