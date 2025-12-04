// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubnetsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subnet
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
   * subnet-group-1
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

export class ListSubnetsResponseBodyContentDataVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
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
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-d3isyds4
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

export class ListSubnetsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
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
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Number of NCs
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller
   * 
   * @example
   * 1
   */
  networkInterfaceCount?: number;
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
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-c6wci55i
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * yzp-rg-test3
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListSubnetsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * vpd basic information
   */
  vpdBaseInfo?: ListSubnetsResponseBodyContentDataVpdBaseInfo;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
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
      cidr: 'Cidr',
      createTime: 'CreateTime',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tags: 'Tags',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tags: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentDataTags },
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: ListSubnetsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
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

export class ListSubnetsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet information list
   */
  data?: ListSubnetsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
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
      data: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentData },
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

export class ListSubnetsResponseBody extends $dara.Model {
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
  content?: ListSubnetsResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 7F9082CC-3D94-560F-A575-8E8EF6CE2CB8
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
      content: ListSubnetsResponseBodyContent,
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

