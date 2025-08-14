// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails extends $dara.Model {
  /**
   * @example
   * 970354711219#
   */
  costCenterCode?: string;
  /**
   * @example
   * 637127
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * 2025-07-16 13:49:59
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-07-16 13:49:59
   */
  gmtModified?: string;
  /**
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @example
   * 583059
   */
  prevCostCenterId?: number;
  /**
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
   * @example
   * 970354711215#
   */
  costCenterCode?: string;
  /**
   * @example
   * 637127
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * 2025-07-16 13:49:59
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-07-16 13:49:59
   */
  gmtModified?: string;
  /**
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @example
   * 583055
   */
  prevCostCenterId?: number;
  /**
   * @example
   * 583050
   */
  rootCostCenterId?: number;
  /**
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
  fromCostCenterShareRuleDetails?: QueryCostCenterShareRuleResponseBodyDataFromCostCenterShareRuleDetails[];
  /**
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @example
   * 1826
   */
  shareRuleId?: number;
  /**
   * @example
   * test
   */
  shareRuleName?: string;
  /**
   * @example
   * AVERAGE
   */
  shareRuleType?: string;
  toCostCenterShareRuleDetails?: QueryCostCenterShareRuleResponseBodyDataToCostCenterShareRuleDetails[];
  static names(): { [key: string]: string } {
    return {
      fromCostCenterShareRuleDetails: 'FromCostCenterShareRuleDetails',
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
  data?: QueryCostCenterShareRuleResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=
   */
  nextToken?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
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

