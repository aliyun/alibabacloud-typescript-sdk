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
   * The sort field.
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
   * The asset ID. Supports fuzzy search.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The asset name. Supports fuzzy search.
   * 
   * @example
   * instance_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The asset type. Supports exact match. If not specified, all asset types are queried.
   * 
   * @example
   * EcsPublicIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1745251200
   */
  endTime?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number. Supports exact match for ports from 1 to 65535. If not specified, all ports are queried.
   * 
   * @example
   * 9100
   */
  port?: string;
  /**
   * @remarks
   * The public IP address. Supports exact match. If not specified, all public IP addresses are queried.
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
   * The risk level. If not specified, all risk levels are queried.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The application name. Supports exact match. If not specified, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @remarks
   * The application name. Supports fuzzy match. If not specified, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  /**
   * @remarks
   * The sort list.
   */
  sortList?: DescribeInternetOpenDetailRequestSortList[];
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 222.212.86.7XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
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

