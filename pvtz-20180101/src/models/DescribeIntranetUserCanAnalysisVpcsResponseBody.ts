// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResultsUserCanAnalysisVpcsPopResult extends $dara.Model {
  authType?: string;
  authorizedUserId?: number;
  networkType?: string;
  regionId?: string;
  treeLevel?: number;
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      treeLevel: 'TreeLevel',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
      networkType: 'string',
      regionId: 'string',
      treeLevel: 'number',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResults extends $dara.Model {
  userCanAnalysisVpcsPopResult?: DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResultsUserCanAnalysisVpcsPopResult[];
  static names(): { [key: string]: string } {
    return {
      userCanAnalysisVpcsPopResult: 'UserCanAnalysisVpcsPopResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCanAnalysisVpcsPopResult: { 'type': 'array', 'itemType': DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResultsUserCanAnalysisVpcsPopResult },
    };
  }

  validate() {
    if(Array.isArray(this.userCanAnalysisVpcsPopResult)) {
      $dara.Model.validateArray(this.userCanAnalysisVpcsPopResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntranetUserCanAnalysisVpcsResponseBody extends $dara.Model {
  /**
   * @example
   * 11
   */
  curPage?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  totalPage?: number;
  /**
   * @example
   * 35
   */
  totalSize?: number;
  userCanAnalysisVpcsPopResults?: DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResults;
  static names(): { [key: string]: string } {
    return {
      curPage: 'CurPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalSize: 'TotalSize',
      userCanAnalysisVpcsPopResults: 'UserCanAnalysisVpcsPopResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalSize: 'number',
      userCanAnalysisVpcsPopResults: DescribeIntranetUserCanAnalysisVpcsResponseBodyUserCanAnalysisVpcsPopResults,
    };
  }

  validate() {
    if(this.userCanAnalysisVpcsPopResults && typeof (this.userCanAnalysisVpcsPopResults as any).validate === 'function') {
      (this.userCanAnalysisVpcsPopResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

