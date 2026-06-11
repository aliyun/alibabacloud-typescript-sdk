// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricFilterDefSupportedOpts extends $dara.Model {
  /**
   * @remarks
   * The display name in Chinese.
   * 
   * @example
   * 在线
   */
  displayNameCn?: string;
  /**
   * @remarks
   * The display name in English.
   * 
   * @example
   * Online
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The matching value.
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
   * If set to \\`true\\`, the filter item does not appear in the \\`group by\\` clause of a PromQL query.
   * 
   * @example
   * true
   */
  dimDisabled?: boolean;
  /**
   * @remarks
   * The display name in Chinese.
   * 
   * @example
   * 应用状态
   */
  displayNameCn?: string;
  /**
   * @remarks
   * The display name in English.
   * 
   * @example
   * Application Status
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Specifies whether to hide the filter. If hidden, the filter does not appear in the frontend UI. However, its value can be uploaded when rendering a PromQL query. For example, in an Application Performance Management (APM) scenario, the pid filter is typically hidden from the configuration UI. The frontend displays it as a separate application search list.
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * If set to \\`true\\`, the filter item does not appear in the label filter of a PromQL query.
   * 
   * @example
   * true
   */
  labelDisabled?: boolean;
  /**
   * @remarks
   * The operator for the filter condition.
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * A list of supported options.
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

