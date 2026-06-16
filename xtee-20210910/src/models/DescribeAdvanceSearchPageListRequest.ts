// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvanceSearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The condition value.
   * 
   * @example
   * {
   *     "relationship": "and",
   *     "list": [
   *         {
   *             "deepCount": 1,
   *             "left": {
   *                 "hasRightVariable": true,
   *                 "fieldType": "STRING",
   *                 "functionName": "",
   *                 "leftVariableType": "NATIVE",
   *                 "name": "accountId",
   *                 "operatorCode": "equals"
   *             },
   *             "right": {
   *                 "rightVariableType": "constant",
   *                 "name": "10000",
   *                 "functionName": ""
   *             },
   *             "operatorCode": "equals"
   *         }
   *     ]
   * }
   */
  condition?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The start time of the query, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753372800000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * ["de_ahqhsw7665"]
   */
  eventCodes?: string;
  /**
   * @remarks
   * The end time of the query, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753459199059
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
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      condition: 'condition',
      currentPage: 'currentPage',
      eventBeginTime: 'eventBeginTime',
      eventCodes: 'eventCodes',
      eventEndTime: 'eventEndTime',
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      pageSize: 'pageSize',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      condition: 'string',
      currentPage: 'number',
      eventBeginTime: 'number',
      eventCodes: 'string',
      eventEndTime: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      pageSize: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

