// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags } from "./ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags";


export class ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the compliance package belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * example-name
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The timestamp when the compliance package was created. Unit: milliseconds.
   * 
   * @example
   * 1624243657000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the managed rules in the compliance package. Valid values:
   * 
   * *   1: high risk level.
   * *   2: medium risk level.
   * *   3: low risk level.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * *   ACTIVE: The compliance package is available for use.
   * *   CREATING: The compliance package is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

