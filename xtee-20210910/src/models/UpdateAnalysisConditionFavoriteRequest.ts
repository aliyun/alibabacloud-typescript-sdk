// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAnalysisConditionFavoriteRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
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
   * {\\"relationship\\":\\"and\\",\\"list\\":[{\\"deepCount\\":1,\\"left\\":{\\"hasRightVariable\\":true,\\"fieldType\\":\\"INT\\",\\"functionName\\":\\"\\",\\"leftVariableType\\":\\"NATIVE\\",\\"name\\":\\"DEtest222\\",\\"operatorCode\\":\\"equals\\"},\\"right\\":{\\"rightVariableType\\":\\"constant\\",\\"name\\":\\"9007199254\\",\\"functionName\\":\\"\\"},\\"operatorCode\\":\\"equals\\"}]}
   */
  condition?: string;
  /**
   * @remarks
   * The start time, in milliseconds (ms).
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
   * de_ajnoqe2016
   */
  eventCode?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
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
   * This parameter is required.
   * 
   * @example
   * 3144
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
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - BASIC: basic query.
   * - ADVANCE: advanced query.
   * - BATCH: batch query.
   * 
   * @example
   * BASIC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      condition: 'condition',
      eventBeginTime: 'eventBeginTime',
      eventCode: 'eventCode',
      eventEndTime: 'eventEndTime',
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      id: 'id',
      name: 'name',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      condition: 'string',
      eventBeginTime: 'number',
      eventCode: 'string',
      eventEndTime: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      id: 'number',
      name: 'string',
      regId: 'string',
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

