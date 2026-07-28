// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkRankingRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition.
   * 
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * lb-2zxxxxz1d
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingRequest extends $dara.Model {
  /**
   * @remarks
   * The member account IDs explicitly passed.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The start timestamp, in **ms**. If not specified, the last hour is queried by default.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * The network traffic direction based on Alibaba Cloud resources. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end timestamp, in **ms**. If not specified, the last hour is queried by default. If only BeginTime is specified, the one hour after BeginTime is queried.
   * 
   * @example
   * 1684379093000
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies filter conditions for focused network traffic analysis.
   */
  filter?: GetNisNetworkRankingRequestFilter[];
  /**
   * @remarks
   * The dimension for metric ranking. Valid values vary by scenario:
   * 
   * This parameter is required.
   * 
   * @example
   * Protocol
   */
  groupBy?: string;
  /**
   * @remarks
   * The metric for ranking Internet traffic. Case-sensitive. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  orderBy?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The Alibaba Cloud network resource type used for traffic forwarding. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * AccessInternetIpV4
   */
  resourceType?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * The number of top-ranked entries to display. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * Specifies whether to use multi-account access mode. This is a reserved parameter and is not currently supported.
   * 
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filter: 'Filter',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      sort: 'Sort',
      topN: 'TopN',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      direction: 'string',
      endTime: 'number',
      filter: { 'type': 'array', 'itemType': GetNisNetworkRankingRequestFilter },
      groupBy: 'string',
      orderBy: 'string',
      regionNo: 'string',
      resourceType: 'string',
      sort: 'string',
      topN: 'number',
      useCrossAccount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

