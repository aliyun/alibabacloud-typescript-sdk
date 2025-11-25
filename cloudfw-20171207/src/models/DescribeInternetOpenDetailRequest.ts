// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenDetailRequestSortList extends $dara.Model {
  /**
   * @example
   * asc
   */
  dir?: string;
  /**
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
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @example
   * instance_test
   */
  assetsInstanceName?: string;
  /**
   * @example
   * EcsPublicIP
   */
  assetsType?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * 1745251200
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 9100
   */
  port?: string;
  /**
   * @example
   * 203.0.13.XX
   */
  publicIp?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  sortList?: DescribeInternetOpenDetailRequestSortList[];
  /**
   * @example
   * 222.212.86.7XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 1656837360
   */
  startTime?: string;
  /**
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

