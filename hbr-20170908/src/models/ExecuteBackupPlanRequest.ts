// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The edition. Valid values: BASIC and STANDARD. Default value: STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the backup rule.
   * 
   * @example
   * rule-0002*****ux8
   */
  ruleId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: Backs up ECS files.
   * 
   * - **OSS**: Backs up Alibaba Cloud OSS.
   * 
   * - **NAS**: Backs up Alibaba Cloud NAS.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      planId: 'PlanId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      planId: 'string',
      ruleId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

