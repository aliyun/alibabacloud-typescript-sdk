// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecutePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * i-bp1************dtv
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * Rule ID, limited to executing rules of **RuleType** **BACKUP**.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-0002*****ux8
   */
  ruleId?: string;
  /**
   * @remarks
   * Data source type, with the value range as follows:
   * 
   * - **UDM_ECS**: Represents ECS full machine backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      policyId: 'PolicyId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      policyId: 'string',
      ruleId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

