// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricFilterDefSupportedOpts extends $dara.Model {
  /**
   * @remarks
   * The Chinese display name.
   * 
   * @example
   * 在线
   */
  displayNameCn?: string;
  /**
   * @remarks
   * The English display name.
   * 
   * @example
   * Online
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The match value.
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
   * The dimension in APM metrics.
   * 
   * @example
   * status
   */
  dim?: string;
  /**
   * @remarks
   * Specifies whether to disable the dimension. If set to true, the filter item does not appear in the group by clause of PromQL.
   * 
   * @example
   * true
   */
  dimDisabled?: boolean;
  /**
   * @remarks
   * The Chinese display name.
   * 
   * @example
   * 应用状态
   */
  displayNameCn?: string;
  /**
   * @remarks
   * The English display name.
   * 
   * @example
   * Application Status
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Specifies whether to hide the filter. If hidden, the filter is not displayed in frontend interactions, but its value can be passed when rendering PromQL. A typical example is the pid filter in APM scenarios, which is typically not displayed through configuration but shown as a separate application search list in the frontend.
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the label. If set to true, the filter item does not appear in the label filter of PromQL.
   * 
   * @example
   * true
   */
  labelDisabled?: boolean;
  /**
   * @remarks
   * The filter condition operator.
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * The list of supported options.
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

