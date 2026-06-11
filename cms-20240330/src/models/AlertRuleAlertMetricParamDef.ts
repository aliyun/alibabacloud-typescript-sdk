// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricParamDefValues extends $dara.Model {
  /**
   * @remarks
   * The Chinese display name of the option.
   * 
   * @example
   * 测试环境
   */
  labelCn?: string;
  /**
   * @remarks
   * The English display name of the option.
   * 
   * @example
   * Staging
   */
  labelEn?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * staging
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labelCn: 'labelCn',
      labelEn: 'labelEn',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCn: 'string',
      labelEn: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricParamDef extends $dara.Model {
  /**
   * @remarks
   * The maximum width of the input control. This parameter is valid only for SELECT_PARAM and INPUT_PARAM.
   * 
   * @example
   * 200
   */
  maxWidth?: number;
  /**
   * @remarks
   * The minimum width of the input control. This parameter is valid only for SELECT_PARAM and INPUT_PARAM.
   * 
   * @example
   * 100
   */
  minWidth?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * env
   */
  name?: string;
  /**
   * @remarks
   * The Chinese placeholder text displayed on the frontend. This parameter is valid only for INPUT_PARAM.
   * 
   * @example
   * 请输入值
   */
  placeholderCn?: string;
  /**
   * @remarks
   * The English placeholder text displayed on the frontend. This parameter is valid only for INPUT_PARAM.
   * 
   * @example
   * Enter value
   */
  placeholderEn?: string;
  /**
   * @remarks
   * ● TEXT_PARAM: A read-only text parameter defined by the backend. No user input control is displayed on the frontend.● INPUT_PARAM: An input box parameter.● SELECT_PARAM: A selection box parameter.
   * 
   * @example
   * TEXT_PARAM
   */
  type?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * staging
   */
  value?: string;
  /**
   * @remarks
   * The list of available options in the drop-down list. This parameter is valid only for SELECT_PARAM.
   */
  values?: AlertRuleAlertMetricParamDefValues[];
  static names(): { [key: string]: string } {
    return {
      maxWidth: 'maxWidth',
      minWidth: 'minWidth',
      name: 'name',
      placeholderCn: 'placeholderCn',
      placeholderEn: 'placeholderEn',
      type: 'type',
      value: 'value',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxWidth: 'number',
      minWidth: 'number',
      name: 'string',
      placeholderCn: 'string',
      placeholderEn: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': AlertRuleAlertMetricParamDefValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

