// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnalysisConditionFavoriteRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * {"relationship":"and","list":[{"deepCount":1,"left":{"hasRightVariable":true,"fieldType":"INT","functionName":"","leftVariableType":"NATIVE","name":"DEtest222","operatorCode":"equals"},"right":{"rightVariableType":"constant","name":"11","functionName":""},"operatorCode":"equals"}]}
   */
  condition?: string;
  /**
   * @remarks
   * The start time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1751299200000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * The event codes. Separate multiple event codes with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["de_ahqhsw7665","de_agbzfi5134"]
   */
  eventCodes?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753372799000
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
   * 10
   */
  fieldValue?: string;
  /**
   * @remarks
   * The name of the saved query condition.
   * 
   * This parameter is required.
   * 
   * @example
   * 条件一
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
   * The query type.
   * 
   * This parameter is required.
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
      eventCodes: 'eventCodes',
      eventEndTime: 'eventEndTime',
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
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
      eventCodes: 'string',
      eventEndTime: 'number',
      fieldName: 'string',
      fieldValue: 'string',
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

