// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * Connections
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test_api_coverage
   */
  description?: string;
  /**
   * @remarks
   * Elastic Router ID
   * 
   * @example
   * er-a7rqv1rq
   */
  erId?: string;
  /**
   * @remarks
   * ER instance name
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ER region information
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Number of routing policy
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * vcc-group-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/13
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1668158213000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-9n7ioqrp
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * @example
   * yzp-rg-test3
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Express Connect circuit access point ID:
   * 
   * *   **ap-cn-wulanchabu-jn-ts-A**: Ulanqab-Jining-A
   * *   **ap-cn-heyuan-yc-ts-SA127**: Heyuan-Yuancheng-A
   * 
   * @example
   * ap-cn-wulanchabu-jn-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the port.
   * 
   * @example
   * 1000
   */
  bandwidthStr?: string;
  /**
   * @remarks
   * bgp as number
   * 
   * @example
   * bgpAsn
   */
  bgpAsn?: string;
  /**
   * @remarks
   * bgp network segment
   * 
   * @example
   * 172.16.128.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-w15qot0pfvs83pkckj
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which cen belongs
   * 
   * @example
   * 1238685214107736
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * Commodity code
   * 
   * @example
   * bccluster_cloudconnectionpre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CENTR**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Current process node
   * 
   * @example
   * test-xxxx-node-x
   */
  currentNode?: string;
  /**
   * @remarks
   * List of bound Lingjun HUB information
   */
  erInfos?: ListVccsResponseBodyContentDataErInfos[];
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1678273219000
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CO**: other connectivity providers in the Chinese mainland
   * 
   * @example
   * CO
   */
  lineOperator?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * some message
   */
  message?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * *   **100GBase-LR**: 100,000 megabytes of single-mode optical port (10 km)
   * 
   * @example
   * 100GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * Process progress; value returns 0 to 1; not started is null
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The compute specification.
   * 
   * @example
   * Large
   */
  spec?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListVccsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * task-cd544092-ed0a-49e9-83eb-e8c94770dccf
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-f8ziirfl9k25h2qn7y4f8
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun network segment information (applicable to the scene where the old version of Lingjun connection is directly bound to Lingjun network segment)
   */
  vpdBaseInfo?: ListVccsResponseBodyContentDataVpdBaseInfo;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidthStr: 'BandwidthStr',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      commodityCode: 'CommodityCode',
      connectionType: 'ConnectionType',
      createTime: 'CreateTime',
      currentNode: 'CurrentNode',
      erInfos: 'ErInfos',
      expirationDate: 'ExpirationDate',
      gmtModified: 'GmtModified',
      lineOperator: 'LineOperator',
      message: 'Message',
      portType: 'PortType',
      rate: 'Rate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidthStr: 'string',
      bgpAsn: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      commodityCode: 'string',
      connectionType: 'string',
      createTime: 'string',
      currentNode: 'string',
      erInfos: { 'type': 'array', 'itemType': ListVccsResponseBodyContentDataErInfos },
      expirationDate: 'string',
      gmtModified: 'string',
      lineOperator: 'string',
      message: 'string',
      portType: 'string',
      rate: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVccsResponseBodyContentDataTags },
      taskId: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: ListVccsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Information List
   */
  data?: ListVccsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccsResponseBodyContentData },
      total: 'number',
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

export class ListVccsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVccsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 28451248-7038-5184-B5D3-80F104654BE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

