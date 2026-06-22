// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID. This parameter is optional. If you do not specify this parameter, a whitelist rule is created.
   * 
   * @example
   * 1
   */
  configId?: number;
  /**
   * @remarks
   * The alerting name. Valid values:
   * - ALL: all Alarm Metric.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The field to be whitelisted.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * The value of the field to be whitelisted.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operator used for rule matching. Valid values:
   * - strEqual: string equals.
   * 
   * @example
   * strEqual
   */
  operator?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The business source. Valid values:
   * - agentless: agentless detection.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the target scope. Valid values:
   * - ALL: all assets
   * - SELECTION_KEY: assets selected by using the asset selection component.
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * The target scope. Valid values:
   * - ALL: all assets
   * - Other values: the key of the asset scope selected by using the asset selection component.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
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
      configId: 'number',
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

