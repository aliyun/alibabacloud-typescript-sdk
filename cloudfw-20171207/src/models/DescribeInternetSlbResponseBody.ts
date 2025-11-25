// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetSlbResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * acl-uf66n6l9mf3fgq8xs****
   */
  aclId?: string;
  /**
   * @example
   * on
   */
  aclStatus?: string;
  /**
   * @example
   * white
   */
  aclType?: string;
  /**
   * @example
   * normal
   */
  healthStatus?: string;
  /**
   * @example
   * lb-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @example
   * buyerpro1
   */
  instanceName?: string;
  /**
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @example
   * 1883
   */
  port?: number;
  /**
   * @example
   * 39.108.57.XXX
   */
  publicIp?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ipProtocol: 'IpProtocol',
      port: 'Port',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ipProtocol: 'string',
      port: 'number',
      publicIp: 'string',
      regionNo: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetSlbResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeInternetSlbResponseBody extends $dara.Model {
  dataList?: DescribeInternetSlbResponseBodyDataList[];
  pageInfo?: DescribeInternetSlbResponseBodyPageInfo;
  /**
   * @example
   * 135BF83A-0416-5A11-96BB-FA7604D4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInternetSlbResponseBodyDataList },
      pageInfo: DescribeInternetSlbResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
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

