// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Router (ER) instance.
   * 
   * @example
   * er-63vzm0fw
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB(ER) instance.
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The supported region.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The number of routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
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

export class ListVpdsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vpd-region
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
   * cn-wulanchabu
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

export class ListVpdsResponseBodyContentData extends $dara.Model {
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
   * The time when the activation code was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Dependencies.
   */
  dependence?: { [key: string]: any };
  /**
   * @remarks
   * The information list of the bound Lingjun HUB(ER).
   */
  erInfos?: ListVpdsResponseBodyContentDataErInfos[];
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * nc quantity.
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
   * The list of additional CIDR blocks.
   */
  secondaryCidrBlocks?: string[];
  /**
   * @remarks
   * The Service CIDR block.
   * 
   * @example
   * 169.254.252.0/23
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The number of subnets.
   * 
   * @example
   * 1
   */
  subnetCount?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListVpdsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-lg4dppgi
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      dependence: 'Dependence',
      erInfos: 'ErInfos',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      serviceCidr: 'ServiceCidr',
      status: 'Status',
      subnetCount: 'SubnetCount',
      tags: 'Tags',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      dependence: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      erInfos: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentDataErInfos },
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      tags: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentDataTags },
      tenantId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    if(this.dependence) {
      $dara.Model.validateMap(this.dependence);
    }
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.secondaryCidrBlocks)) {
      $dara.Model.validateArray(this.secondaryCidrBlocks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVpdsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
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
      data: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentData },
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

export class ListVpdsResponseBody extends $dara.Model {
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
   * The response data.
   */
  content?: ListVpdsResponseBodyContent;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
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
      content: ListVpdsResponseBodyContent,
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

