// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedAssetsResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * 11
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * 11
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 10.10.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.0.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of viruses detected on the server.
   * 
   * @example
   * 1
   */
  riskNum?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 947d7514-258a-4b47-9dde-9dxxxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      riskNum: 'RiskNum',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      riskNum: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedAssetsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the affected servers.
   */
  assetList?: DescribeAffectedAssetsResponseBodyAssetList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAffectedAssetsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42XXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAffectedAssetsResponseBodyAssetList },
      pageInfo: DescribeAffectedAssetsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

