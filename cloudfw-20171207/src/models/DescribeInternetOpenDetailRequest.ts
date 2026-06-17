// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenDetailRequestSortList extends $dara.Model {
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * asc
   */
  dir?: string;
  /**
   * @remarks
   * The sorting key.
   * 
   * @example
   * ServiceName
   */
  sortKey?: string;
  static names(): { [key: string]: string } {
    return {
      dir: 'Dir',
      sortKey: 'SortKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dir: 'string',
      sortKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset. Fuzzy search is supported.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the asset. Fuzzy search is supported.
   * 
   * @example
   * instance_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The type of the asset for an exact match. If you leave this parameter empty, all asset types are queried.
   * 
   * @example
   * EcsPublicIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1745251200
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port for an exact match. The value must be an integer from 1 to 65535. If you leave this parameter empty, all ports are queried.
   * 
   * @example
   * 9100
   */
  port?: string;
  /**
   * @remarks
   * The public IP address for an exact match. If you leave this parameter empty, all public IP addresses are queried.
   * 
   * @example
   * 203.0.13.XX
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level. If you leave this parameter empty, all risk levels are queried.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the application for an exact match. If you leave this parameter empty, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the application for a fuzzy match. If you leave this parameter empty, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  /**
   * @remarks
   * The sorting conditions.
   */
  sortList?: DescribeInternetOpenDetailRequestSortList[];
  /**
   * @remarks
   * The source IP address of the access request.
   * 
   * @example
   * 222.212.86.7XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656837360
   */
  startTime?: string;
  /**
   * @remarks
   * The recommended policy level.
   * 
   * @example
   * 10
   */
  suggestLevel?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      port: 'Port',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      serviceName: 'ServiceName',
      serviceNameFuzzy: 'ServiceNameFuzzy',
      sortList: 'SortList',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      suggestLevel: 'SuggestLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      currentPage: 'string',
      endTime: 'string',
      lang: 'string',
      pageSize: 'string',
      port: 'string',
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'string',
      serviceName: 'string',
      serviceNameFuzzy: 'string',
      sortList: { 'type': 'array', 'itemType': DescribeInternetOpenDetailRequestSortList },
      sourceIp: 'string',
      startTime: 'string',
      suggestLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sortList)) {
      $dara.Model.validateArray(this.sortList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

