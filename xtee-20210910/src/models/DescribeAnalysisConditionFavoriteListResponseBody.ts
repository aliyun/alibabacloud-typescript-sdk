// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnalysisConditionFavoriteListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The condition value.
   * 
   * @example
   * {"currentId":1,"deepCount":0,"list":[{"currentId":2,"deepCount":1,"left":{"code":"accountId","fieldType":"STRING","functionName":"","hasRightVariable":false,"name":"accountId"},"operatorCode":"isNotEmptyWrapper","parentId":1,"right":{"code":"\\"A\\nB\\nC\\"","functionName":"","name":"","rightVariableType":"constant"}}],"parentId":0,"relationship":"and"}
   */
  condition?: string;
  /**
   * @remarks
   * The event start timestamp.
   * 
   * @example
   * 1752076800000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_ahespg8137
   */
  eventCodes?: string;
  /**
   * @remarks
   * The event end timestamp.
   * 
   * @example
   * 1753891199000
   */
  eventEndTime?: number;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The field value.
   * 
   * @example
   * 20
   */
  fieldValue?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The condition name.
   * 
   * @example
   * 查询条件1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values: BASIC: basic query. ADVANCE: advanced query. BATCH: batch query.
   * 
   * @example
   * BASIC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      eventBeginTime: 'eventBeginTime',
      eventCodes: 'eventCodes',
      eventEndTime: 'eventEndTime',
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      eventBeginTime: 'number',
      eventCodes: 'string',
      eventEndTime: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      id: 'number',
      name: 'string',
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

export class DescribeAnalysisConditionFavoriteListResponseBody extends $dara.Model {
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
  resultObject?: DescribeAnalysisConditionFavoriteListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAnalysisConditionFavoriteListResponseBodyResultObject },
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

