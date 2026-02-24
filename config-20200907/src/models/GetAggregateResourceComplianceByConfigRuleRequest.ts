// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceByConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  complianceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleId?: string;
  resourceAccountId?: number;
  /**
   * @deprecated
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      resourceAccountId: 'number',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

