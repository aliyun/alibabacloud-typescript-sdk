// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkRankingRequestFilter extends $dara.Model {
  /**
   * @example
   * instanceId
   */
  name?: string;
  /**
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
  accountIds?: string[];
  /**
   * @example
   * 1684373600099
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 1684379093000
   */
  endTime?: number;
  filter?: GetNisNetworkRankingRequestFilter[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Protocol
   */
  groupBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bps
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AccessInternetIpV4
   */
  resourceType?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @example
   * 10
   */
  topN?: number;
  /**
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

