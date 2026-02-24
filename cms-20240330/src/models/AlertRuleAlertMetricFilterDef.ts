// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricFilterDefSupportedOpts extends $dara.Model {
  /**
   * @remarks
   * Display Name (Chinese).
   * 
   * @example
   * Online
   */
  displayNameCn?: string;
  /**
   * @remarks
   * Display Name (English).
   * 
   * @example
   * Online
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Matching value.
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
   * Dimension in APM metrics.
   * 
   * @example
   * status
   */
  dim?: string;
  /**
   * @remarks
   * When true, the filter item will not appear in the GROUP BY clause of the PromQL.
   * 
   * @example
   * true
   */
  dimDisabled?: boolean;
  /**
   * @remarks
   * Display Name (Chinese).
   * 
   * @example
   * Application Status
   */
  displayNameCn?: string;
  /**
   * @remarks
   * Display Name (English).
   * 
   * @example
   * Application Status
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Whether to hide. If hidden, it will not be displayed in the frontend UI, but its value can still be included when rendering the PromQL. A typical example is the "pid" filter condition in APM scenarios, which is generally not exposed through configurable UI elements but instead presented as a separate application search list in the frontend.
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * When true, the filter item will not appear in the label filter of the PromQL.
   * 
   * @example
   * true
   */
  labelDisabled?: boolean;
  /**
   * @remarks
   * Filter Condition Operator.
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * List of supported options.
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

