// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyMaskingRulesRequestRuleConfig } from "./ModifyMaskingRulesRequestRuleConfig";


export class ModifyMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  DBName?: string;
  defaultAlgo?: string;
  enabled?: string;
  maskingAlgo?: string;
  ownerId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleConfig?: ModifyMaskingRulesRequestRuleConfig;
  /**
   * @remarks
   * This parameter is required.
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
      ruleConfig: 'RuleConfig',
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
      ruleConfig: ModifyMaskingRulesRequestRuleConfig,
      ruleName: 'string',
    };
  }

  validate() {
    if(this.ruleConfig && typeof (this.ruleConfig as any).validate === 'function') {
      (this.ruleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

