// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist rule. If you do not specify this parameter, a whitelist rule is created.
   * 
   * @example
   * 1
   */
  configId?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * *   Set the value to ALL, which indicates all alert types.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The field that you want to use in the whitelist rule.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * The value of the field that you want to use in the whitelist rule.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * The logical operator that you want to use in the whitelist rule.
   * 
   * *   Set the value to strEqual, which indicates the equality operator (=).
   * 
   * @example
   * strEqual
   */
  operator?: string;
  /**
   * @remarks
   * The feature to which this operation belongs.
   * 
   * *   Set the value to agentless, which indicates the agentless detection feature.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the assets on which you want the whitelist rule to take effect. Valid values:
   * 
   * *   ALL: all assets
   * *   SELECTION_KEY: selected assets
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * The assets on which you want the whitelist rule to take effect. Valid values:
   * 
   * *   ALL: all assets
   * *   Others: selected assets
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

