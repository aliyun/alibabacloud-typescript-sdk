// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateMaliciousFileWhitelistConfigRequestConfigList extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist rule for sensitive file alerts in agentless detection. This parameter is optional. If you do not specify this parameter, a new rule is created. You can call the [ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~) operation to obtain the ID of the whitelist rule for sensitive files.
   * 
   * @example
   * 1
   */
  configId?: number;
  /**
   * @remarks
   * The alerting name. Valid values:
   * - **ALL**: all Alarm Metrics.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The field used to determine the whitelist for sensitive file alerts.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * The expected field value to be whitelisted.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operator used to evaluate the rule. Valid values:
   * - strEqual: equal to.
   * 
   * @example
   * strEqual
   */
  operator?: string;
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
   * The type of the target to which the rule applies. Valid values:
   * - ALL: all assets.
   * - SELECTION_KEY: assets selected by using the asset selection component.
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * The scope of the target to which the rule applies. Valid values:
   * - ALL: all assets.
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

export class BatchUpdateMaliciousFileWhitelistConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of whitelist rules for sensitive file alerts in agentless detection.
   */
  configList?: BatchUpdateMaliciousFileWhitelistConfigRequestConfigList[];
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': BatchUpdateMaliciousFileWhitelistConfigRequestConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

