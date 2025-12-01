// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableVersionDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Condition value.
   * 
   * @example
   * {"currentId":1,"deepCount":0,"list":[{"currentId":2,"deepCount":1,"left":{"code":"accountId","fieldType":"STRING","functionName":"","hasRightVariable":false,"name":"accountId"},"operatorCode":"isNotEmptyWrapper","parentId":1,"right":{"code":"\\"A\\nB\\nC\\"","functionName":"","name":"","rightVariableType":"constant"}}],"parentId":0,"relationship":"and"}
   */
  condition?: string;
  /**
   * @remarks
   * Data version.
   * 
   * @example
   * 1
   */
  dataVersion?: number;
  /**
   * @remarks
   * Variable description information.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_awkhwh0314
   */
  eventCodes?: string;
  /**
   * @remarks
   * Global cumulative. Not currently available externally.
   * 
   * @example
   * false
   */
  global?: boolean;
  /**
   * @remarks
   * Historical value parameter type.
   * 
   * @example
   * COUNT
   */
  historyValueType?: string;
  /**
   * @remarks
   * Primary key ID of the version.
   * 
   * @example
   * 3434
   */
  id?: number;
  /**
   * @remarks
   * Subordinate attribute (single selection, sourced from the event attribute list code).
   * 
   * @example
   * name
   */
  object?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Main attribute (multiple separated by commas, up to 5, sourced from the event attribute list code).
   * 
   * @example
   * age
   */
  subject?: string;
  /**
   * @remarks
   * Time slice type.
   * 
   * @example
   * CURRENT
   */
  timeType?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 累计个数
   */
  title?: string;
  /**
   * @remarks
   * Top N.
   * 
   * @example
   * topN累计
   */
  topN?: number;
  /**
   * @remarks
   * Number of time slices.
   * 
   * @example
   * 1
   */
  twCount?: number;
  /**
   * @remarks
   * Cumulative indicator processing function.
   * 
   * @example
   * COUNT
   */
  velocityFC?: string;
  /**
   * @remarks
   * Cumulative indicator time window.
   * 
   * @example
   * MONTH_1
   */
  velocityTW?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      dataVersion: 'dataVersion',
      description: 'description',
      eventCodes: 'eventCodes',
      global: 'global',
      historyValueType: 'historyValueType',
      id: 'id',
      object: 'object',
      status: 'status',
      subject: 'subject',
      timeType: 'timeType',
      title: 'title',
      topN: 'topN',
      twCount: 'twCount',
      velocityFC: 'velocityFC',
      velocityTW: 'velocityTW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      dataVersion: 'number',
      description: 'string',
      eventCodes: 'string',
      global: 'boolean',
      historyValueType: 'string',
      id: 'number',
      object: 'string',
      status: 'string',
      subject: 'string',
      timeType: 'string',
      title: 'string',
      topN: 'number',
      twCount: 'number',
      velocityFC: 'string',
      velocityTW: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableVersionDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeVariableVersionDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVariableVersionDetailResponseBodyResultObject,
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

