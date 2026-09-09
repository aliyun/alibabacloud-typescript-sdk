// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails extends $dara.Model {
  /**
   * @remarks
   * The code of the financial unit.
   * 
   * @example
   * 970354711219#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The ID of the financial unit.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * The name of the financial unit.
   * 
   * @example
   * Cost Plan
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
   * The ID of the user to whom the financial unit belongs.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The ID of the parent financial unit.
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The ID of the preceding financial unit.
   * 
   * @example
   * 583059
   */
  prevCostCenterId?: number;
  /**
   * @remarks
   * The ID of the root financial unit.
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
   * The code of the financial unit.
   * 
   * @example
   * 970354711215#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The ID of the financial unit.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * The name of the financial unit.
   * 
   * @example
   * Cost Allocation
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
   * The ID of the user to whom the financial unit belongs.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The ID of the parent financial unit.
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The ID of the preceding financial unit.
   * 
   * @example
   * 583055
   */
  prevCostCenterId?: number;
  /**
   * @remarks
   * The ID of the root financial unit.
   * 
   * @example
   * 583050
   */
  rootCostCenterId?: number;
  /**
   * @remarks
   * The cost allocation ratio.
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
   * The rule information of the source financial unit.
   */
  fromCostCenterShareRuleDetails?: QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails[];
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the user to whom the financial unit belongs.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The ID of the cost allocation rule.
   * 
   * @example
   * 1826
   */
  shareRuleId?: number;
  /**
   * @remarks
   * The name of the cost allocation rule.
   * 
   * @example
   * test
   */
  shareRuleName?: string;
  /**
   * @remarks
   * The type of the cost allocation rule.
   * 
   * @example
   * AVERAGE
   */
  shareRuleType?: string;
  /**
   * @remarks
   * The rule information of the destination financial unit.
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
   * A reserved field.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response struct metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * A reserved field.
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

