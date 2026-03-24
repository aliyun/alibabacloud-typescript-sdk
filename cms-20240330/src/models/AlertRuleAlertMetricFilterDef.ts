// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricFilterDefSupportedOpts extends $dara.Model {
  /**
   * @remarks
   * 显示名称中文
   * 
   * @example
   * 在线
   */
  displayNameCn?: string;
  /**
   * @remarks
   * 显示名称英文
   * 
   * @example
   * Online
   */
  displayNameEn?: string;
  /**
   * @remarks
   * 匹配值。
   * 
   * @example
   * online
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayNameCn: 'displayNameCn',
      displayNameEn: 'displayNameEn',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayNameCn: 'string',
      displayNameEn: 'string',
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

export class AlertRuleAlertMetricFilterDef extends $dara.Model {
  /**
   * @remarks
   * APM指标中为维度
   * 
   * @example
   * status
   */
  dim?: string;
  /**
   * @remarks
   * 为true是，过滤项不出现在promQL的group by中
   * 
   * @example
   * true
   */
  dimDisabled?: boolean;
  /**
   * @remarks
   * 显示名称中文
   * 
   * @example
   * 应用状态
   */
  displayNameCn?: string;
  /**
   * @remarks
   * 显示名称英文
   * 
   * @example
   * Application Status
   */
  displayNameEn?: string;
  /**
   * @remarks
   * 是否隐藏。 如果隐藏则在前端交互中不显示，但在渲染promQL时可将该过滤条件的值上传上来。  典型的例子是APM场景中的pid这个过滤条件，一般不会通过配置化的方式进行显示，而是前端显为独立的应用搜索列表。
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * 为true时，过滤项不出现在promQL的label filter中
   * 
   * @example
   * true
   */
  labelDisabled?: boolean;
  /**
   * @remarks
   * 过滤条件操作符
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * 支持的选项的列表
   */
  supportedOpts?: AlertRuleAlertMetricFilterDefSupportedOpts[];
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      dimDisabled: 'dimDisabled',
      displayNameCn: 'displayNameCn',
      displayNameEn: 'displayNameEn',
      hidden: 'hidden',
      labelDisabled: 'labelDisabled',
      opt: 'opt',
      supportedOpts: 'supportedOpts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      dimDisabled: 'boolean',
      displayNameCn: 'string',
      displayNameEn: 'string',
      hidden: 'boolean',
      labelDisabled: 'boolean',
      opt: 'string',
      supportedOpts: { 'type': 'array', 'itemType': AlertRuleAlertMetricFilterDefSupportedOpts },
    };
  }

  validate() {
    if(Array.isArray(this.supportedOpts)) {
      $dara.Model.validateArray(this.supportedOpts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

