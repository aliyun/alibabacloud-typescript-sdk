// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvanceSearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Condition value.
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
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Query start time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753372800000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * Event code.
   * 
   * This parameter is required.
   * 
   * @example
   * ["de_ahqhsw7665"]
   */
  eventCodes?: string;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753459199059
   */
  eventEndTime?: number;
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * Field value
   * 
   * @example
   * 20
   */
  fieldValue?: string;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region code
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

