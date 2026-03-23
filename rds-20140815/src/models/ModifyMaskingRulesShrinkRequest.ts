// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaskingRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******6d5
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Database name
   * 
   * @example
   * myDB
   */
  DBName?: string;
  /**
   * @remarks
   * Name of the default encryption or masking algorithm
   * 
   * @example
   * sm4-128-gcm
   */
  defaultAlgo?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values: true, false
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * Rule algorithm. Multiple algorithms can be specified. Masking Algorithm can include additional parameters. Format: {name: algorithm1}, {name: algorithm2, params: {encryption position, number of encrypted digits}}
   * 
   * @example
   * [{"name": "sha256"},
   *         {"name":"sm4-128-gcm"}]
   */
  maskingAlgo?: string;
  ownerId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Rule configuration, in JSON string format
   */
  ruleConfigShrink?: string;
  /**
   * @remarks
   * Name of the rule to modify
   * 
   * This parameter is required.
   * 
   * @example
   * rulename1
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      defaultAlgo: 'DefaultAlgo',
      enabled: 'Enabled',
      maskingAlgo: 'MaskingAlgo',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleConfigShrink: 'RuleConfig',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBName: 'string',
      defaultAlgo: 'string',
      enabled: 'string',
      maskingAlgo: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleConfigShrink: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

