// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustVariableDetailResponseBodyResultObject extends $dara.Model {
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
   * Description information.
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
   * de_ahespg8137
   */
  eventCodes?: string;
  /**
   * @remarks
   * Value type
   * 
   * @example
   * EARLIEST
   */
  historyValueType?: string;
  /**
   * @remarks
   * Primary key ID of the cumulative variable
   * 
   * @example
   * 2793
   */
  id?: number;
  /**
   * @remarks
   * Cumulative object
   * 
   * @example
   * DEpage
   */
  object?: string;
  /**
   * @remarks
   * Variable return type
   * 
   * @example
   * DOUBLE
   */
  outputs?: string;
  /**
   * @remarks
   * Main object
   * 
   * @example
   * DEpname
   */
  subject?: string;
  /**
   * @remarks
   * Time slice type
   * 
   * @example
   * NEAR
   */
  timeType?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 累计变量求平均值
   */
  title?: string;
  /**
   * @remarks
   * Time count
   * 
   * @example
   * 1
   */
  twCount?: string;
  /**
   * @remarks
   * Variable type
   * 
   * @example
   * DISTINCT
   */
  velocityFC?: string;
  /**
   * @remarks
   * Time slice unit
   * 
   * @example
   * HOUR_1
   */
  velocityTW?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      dataVersion: 'dataVersion',
      description: 'description',
      eventCodes: 'eventCodes',
      historyValueType: 'historyValueType',
      id: 'id',
      object: 'object',
      outputs: 'outputs',
      subject: 'subject',
      timeType: 'timeType',
      title: 'title',
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
      historyValueType: 'string',
      id: 'number',
      object: 'string',
      outputs: 'string',
      subject: 'string',
      timeType: 'string',
      title: 'string',
      twCount: 'string',
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

export class DescribeCustVariableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeCustVariableDetailResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeCustVariableDetailResponseBodyResultObject },
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

