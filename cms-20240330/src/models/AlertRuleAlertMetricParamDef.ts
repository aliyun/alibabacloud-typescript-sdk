// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricParamDefValues extends $dara.Model {
  /**
   * @remarks
   * 选项的中文显示名称
   * 
   * @example
   * 测试环境
   */
  labelCn?: string;
  /**
   * @remarks
   * 选项的英文显示名称
   * 
   * @example
   * Staging
   */
  labelEn?: string;
  /**
   * @remarks
   * 值
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
   * 输入框的最大宽度，仅对SELECT_PARAM、INPUT_PARAM生效
   * 
   * @example
   * 200
   */
  maxWidth?: number;
  /**
   * @remarks
   * 输入框的最小宽度，仅对SELECT_PARAM、INPUT_PARAM生效
   * 
   * @example
   * 100
   */
  minWidth?: number;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * env
   */
  name?: string;
  /**
   * @remarks
   * 仅对INPUT_PARAM有效。用于前端展示的中文展位符
   * 
   * @example
   * 请输入值
   */
  placeholderCn?: string;
  /**
   * @remarks
   * 仅对INPUT_PARAM有效。用于前端展示的英文展位符
   * 
   * @example
   * Enter value
   */
  placeholderEn?: string;
  /**
   * @remarks
   * ● TEXT_PARAM: 只读文本参数，由后台定义，前端不显示用户输入控件
   * ● INPUT_PARAM：输入框参数
   * ● SELECT_PARAM：选择框参数
   * 
   * @example
   * TEXT_PARAM
   */
  type?: string;
  /**
   * @remarks
   * 值
   * 
   * @example
   * staging
   */
  value?: string;
  /**
   * @remarks
   * 仅对SELECT_PARAM有效。  下拉列表的可选值列表。
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

