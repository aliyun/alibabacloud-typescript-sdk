// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustVariableRequest extends $dara.Model {
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
   * {"relationship":"and","list":[{"deepCount":1,"left":{"hasRightVariable":true,"fieldType":"INT","functionName":"","leftVariableType":"NATIVE","name":"DEtest222","operatorCode":"equals"},"right":{"rightVariableType":"constant","name":"11","functionName":""},"operatorCode":"equals"}]}
   */
  condition?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ip调用次数累计描述
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_ahqhsw7665,de_agbzfi5134
   */
  eventCodes?: string;
  /**
   * @remarks
   * The value type.
   * 
   * @example
   * EARLIEST
   */
  historyValueType?: string;
  /**
   * @remarks
   * The cumulative object.
   * 
   * @example
   * age
   */
  object?: string;
  /**
   * @remarks
   * The return type of the variable.
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The subject object.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  subject?: string;
  /**
   * @remarks
   * The time slice type.
   * 
   * This parameter is required.
   * 
   * @example
   * CURRENT
   */
  timeType?: string;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * ip调用次数累计
   */
  title?: string;
  /**
   * @remarks
   * The number of time units.
   * 
   * @example
   * 1
   */
  twCount?: number;
  /**
   * @remarks
   * The variable type.
   * 
   * This parameter is required.
   * 
   * @example
   * DISTINCT
   */
  velocityFC?: string;
  /**
   * @remarks
   * The time slice unit.
   * 
   * This parameter is required.
   * 
   * @example
   * DAY_1
   */
  velocityTW?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      condition: 'condition',
      createType: 'createType',
      description: 'description',
      eventCodes: 'eventCodes',
      historyValueType: 'historyValueType',
      object: 'object',
      outputs: 'outputs',
      regId: 'regId',
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
      lang: 'string',
      condition: 'string',
      createType: 'string',
      description: 'string',
      eventCodes: 'string',
      historyValueType: 'string',
      object: 'string',
      outputs: 'string',
      regId: 'string',
      subject: 'string',
      timeType: 'string',
      title: 'string',
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

