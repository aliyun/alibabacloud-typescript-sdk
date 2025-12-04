// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdResponseBodyContentErInfos extends $dara.Model {
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
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * Restore verifying
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Router (ER) instance.
   * 
   * @example
   * er-a7rqv1rq
   */
  erId?: string;
  /**
   * @remarks
   * Elastic Router (ER) Instance Name
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
   * 1678273219000
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
   * The ID of the region to which the Elastic Router (ER) belongs.
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
   * t464p4fql1bog
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

export class GetVpdResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subent-region
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

export class GetVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether the Lingjun HUB(ER) has been bound.
   * 
   * *   **true**: ER is bound.
   * *   **false**: No ER is bound.
   * 
   * @example
   * true
   */
  attachErStatus?: boolean;
  /**
   * @remarks
   * The CIDR block.
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
   * The information of the bound Lingjun HUB(ER).
   */
  erInfos?: GetVpdResponseBodyContentErInfos[];
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-10-25 15:57:16
   */
  gmtModified?: string;
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
   * The number of NCs.
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller.
   * 
   * @example
   * 1
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The total number of secondary private IP addresses.
   * 
   * @example
   * 10
   */
  privateIpCount?: number;
  /**
   * @remarks
   * The total quota information.
   * 
   * @example
   * 10
   */
  quota?: number;
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
   * Internal Service CIDR block.
   * 
   * @example
   * 169.254.252.0/23
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The current state of the instance.
   * 
   * Valid value:
   * 
   * *   Not Available: Not Available.
   * *   Available: Normal: Available: Normal.
   * *   Deleting: Deleting: Deleting: Deleting.
   * *   Executing: executing: Executing: executing.
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
  tags?: GetVpdResponseBodyContentTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the Lingjun CIDR block.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      attachErStatus: 'AttachErStatus',
      cidr: 'Cidr',
      createTime: 'CreateTime',
      erInfos: 'ErInfos',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      privateIpCount: 'PrivateIpCount',
      quota: 'Quota',
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
      attachErStatus: 'boolean',
      cidr: 'string',
      createTime: 'string',
      erInfos: { 'type': 'array', 'itemType': GetVpdResponseBodyContentErInfos },
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      privateIpCount: 'number',
      quota: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      tags: { 'type': 'array', 'itemType': GetVpdResponseBodyContentTags },
      tenantId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
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

export class GetVpdResponseBody extends $dara.Model {
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
   * The data returned.
   */
  content?: GetVpdResponseBodyContent;
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
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
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
      content: GetVpdResponseBodyContent,
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

