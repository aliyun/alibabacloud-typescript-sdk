// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the compliance pack belongs.
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
   * The compliance pack ID.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance pack.
   * 
   * @example
   * BestPracticesForResourceStability
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance pack template.
   * 
   * @example
   * ct-484cff4e06a30062****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The timestamp when the compliance pack was created. Unit: milliseconds.
   * 
   * @example
   * 1624243657000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance pack.
   * 
   * @example
   * Check the stability of Alibaba Cloud resources based on the high-availability infrastructure, capacity protection, change management, monitoring management, backup management, and fault isolation. This helps you identify issues at the earliest opportunity and improve stability and the efficiency of O&M.
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The status of the compliance pack. Valid values:
   * 
   * - ACTIVE: The compliance pack is active.
   * 
   * - CREATING: The compliance pack is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tag of the resource.
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

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResult extends $dara.Model {
  /**
   * @remarks
   * The compliance packs.
   */
  compliancePacks?: ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of compliance packs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the query.
   */
  compliancePacksResult?: ListAggregateCompliancePacksResponseBodyCompliancePacksResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B5806142-3090-4F86-A84E-12B3FE52C1C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePacksResult: 'CompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacksResult: ListAggregateCompliancePacksResponseBodyCompliancePacksResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePacksResult && typeof (this.compliancePacksResult as any).validate === 'function') {
      (this.compliancePacksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

