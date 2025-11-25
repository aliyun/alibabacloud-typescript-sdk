// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Alert name:
   * - ALL: All alerts
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * Field used for whitelist in sensitive file alerts.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * Expected value of the field to be whitelisted.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * Rule judgment operator:
   * - strEqual: String equals
   * 
   * @example
   * strEqual
   */
  operator?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * whitelist
   */
  remark?: string;
  /**
   * @remarks
   * Business source:
   * - agentless: Agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * Effective target type:
   * - ALL: All assets
   * - SELECTION_KEY: Assets selected via the asset selection component
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * Target effective scope:
   * - ALL: All assets
   * - Other: Key of the asset range selected by the asset selection component
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      field: 'Field',
      fieldValue: 'FieldValue',
      operator: 'Operator',
      remark: 'Remark',
      source: 'Source',
      targetType: 'TargetType',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      field: 'string',
      fieldValue: 'string',
      operator: 'string',
      remark: 'string',
      source: 'string',
      targetType: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

