// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails extends $dara.Model {
  /**
   * @remarks
   * The cost center code.
   * 
   * @example
   * 970354711219#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * The cost center name.
   * 
   * @example
   * 成本计划
   */
  costCenterName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-16 13:49:59
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-07-16 13:49:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The owner account ID of the cost center.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The parent cost center ID.
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The previous cost center ID.
   * 
   * @example
   * 583059
   */
  prevCostCenterId?: number;
  /**
   * @remarks
   * The root cost center ID.
   * 
   * @example
   * 583050
   */
  rootCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
      prevCostCenterId: 'PrevCostCenterId',
      rootCostCenterId: 'RootCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerAccountId: 'number',
      parentCostCenterId: 'number',
      prevCostCenterId: 'number',
      rootCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterShareRuleResponseBodyDataToCostCenterShareRuleDetails extends $dara.Model {
  /**
   * @remarks
   * The cost center code.
   * 
   * @example
   * 970354711215#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * The cost center name.
   * 
   * @example
   * 成本分摊
   */
  costCenterName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-16 13:49:59
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-07-16 13:49:59
   */
  gmtModified?: string;
  /**
   * @remarks
   * The owner account ID of the cost center.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The parent cost center ID.
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The previous cost center ID.
   * 
   * @example
   * 583055
   */
  prevCostCenterId?: number;
  /**
   * @remarks
   * The root cost center ID.
   * 
   * @example
   * 583050
   */
  rootCostCenterId?: number;
  /**
   * @remarks
   * The sharing ratio.
   * 
   * @example
   * 0.2
   */
  shareRatio?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
      prevCostCenterId: 'PrevCostCenterId',
      rootCostCenterId: 'RootCostCenterId',
      shareRatio: 'ShareRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerAccountId: 'number',
      parentCostCenterId: 'number',
      prevCostCenterId: 'number',
      rootCostCenterId: 'number',
      shareRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterShareRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The source cost center rule details.
   */
  fromCostCenterShareRuleDetails?: QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails[];
  /**
   * @example
   * 2026-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The owner account ID of the cost center.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The sharing rule ID.
   * 
   * @example
   * 1826
   */
  shareRuleId?: number;
  /**
   * @remarks
   * The sharing rule name.
   * 
   * @example
   * test
   */
  shareRuleName?: string;
  /**
   * @remarks
   * The sharing rule type.
   * 
   * @example
   * AVERAGE
   */
  shareRuleType?: string;
  /**
   * @remarks
   * The target cost center rule details.
   */
  toCostCenterShareRuleDetails?: QueryCostCenterShareRuleResponseBodyDataToCostCenterShareRuleDetails[];
  static names(): { [key: string]: string } {
    return {
      fromCostCenterShareRuleDetails: 'FromCostCenterShareRuleDetails',
      gmtModified: 'GmtModified',
      ownerAccountId: 'OwnerAccountId',
      shareRuleId: 'ShareRuleId',
      shareRuleName: 'ShareRuleName',
      shareRuleType: 'ShareRuleType',
      toCostCenterShareRuleDetails: 'ToCostCenterShareRuleDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromCostCenterShareRuleDetails: { 'type': 'array', 'itemType': QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails },
      gmtModified: 'string',
      ownerAccountId: 'number',
      shareRuleId: 'number',
      shareRuleName: 'string',
      shareRuleType: 'string',
      toCostCenterShareRuleDetails: { 'type': 'array', 'itemType': QueryCostCenterShareRuleResponseBodyDataToCostCenterShareRuleDetails },
    };
  }

  validate() {
    if(Array.isArray(this.fromCostCenterShareRuleDetails)) {
      $dara.Model.validateArray(this.fromCostCenterShareRuleDetails);
    }
    if(Array.isArray(this.toCostCenterShareRuleDetails)) {
      $dara.Model.validateArray(this.toCostCenterShareRuleDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterShareRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data list.
   */
  data?: QueryCostCenterShareRuleResponseBodyData[];
  /**
   * @remarks
   * Reserved field.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Reserved field.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      metadata: 'Metadata',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryCostCenterShareRuleResponseBodyData },
      maxResults: 'number',
      metadata: 'any',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

