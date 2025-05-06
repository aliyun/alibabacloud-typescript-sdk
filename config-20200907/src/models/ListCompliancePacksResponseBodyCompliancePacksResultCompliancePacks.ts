// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags } from "./ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags";


export class ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the compliance package belongs.
   * 
   * @example
   * 120886317861****
   */
  accountId?: number;
  /**
   * @remarks
   * The compliance package ID.
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
   * ClassifiedProtectionPreCheck
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
   * 1621325046000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * Based on the Level 3 standards Equal Protection 2.0, this template provides continuous compliance monitoring recommendations to help you perform self-inspections and fix issues in advance, ensuring a quick pass during the official inspection.
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rules in the compliance package. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * *   ACTIVE: The compliance package is normal.
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
  tags?: ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags },
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

