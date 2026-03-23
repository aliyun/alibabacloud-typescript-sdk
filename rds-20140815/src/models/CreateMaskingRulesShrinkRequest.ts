// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaskingRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o3*****d5
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Database name
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * Name of the default encryption or masking algorithm
   * 
   * @example
   * aes-128-gcm
   */
  defaultAlgo?: string;
  /**
   * @remarks
   * Rule algorithm. Multiple algorithms can be selected. Masking Algorithm can include additional parameters. Format: {name: algorithm1}, {name: algorithm2, params: {encryption position, number of encrypted characters}}
   * 
   * @example
   * [{"name": "aes-128-gcm"},
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
   * Rule configuration, in JSON string format, containing matching rules for databases, tables, and columns
   */
  ruleConfigShrink?: string;
  /**
   * @remarks
   * Rule Name (only one rule name is supported per request)
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

