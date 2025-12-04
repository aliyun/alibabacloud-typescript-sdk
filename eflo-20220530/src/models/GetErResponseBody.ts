// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErResponseBodyContentErAttachments extends $dara.Model {
  /**
   * @remarks
   * Cross-account
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * Receive all routes automatically
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * The connection ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-f32hxfsu
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * fudan-egpu
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1649303733000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpd-kkopgtne
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * zhijiao
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance type: VPD and VCC
   * 
   * Valid value:
   * 
   * *   VCC: Lingjun Connection.
   * *   VPD: Lingjun network segment.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
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
   * The synchronized region where the ECS instances are deployed.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * xxxxxxxx
   */
  resourceTenantId?: string;
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
      across: 'Across',
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      createTime: 'CreateTime',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      autoReceiveAllRoute: 'boolean',
      createTime: 'string',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
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

export class GetErResponseBodyContentErRouteEntrys extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 10.0.0.0/9
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * er-rte-xnmsd2kl
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1623317089000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-xxkmggkw
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
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
   * Resource group instance ID
   * 
   * @example
   * rg-acfmyoj5mg3w54y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * System
   */
  routeType?: string;
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
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteEntryId: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
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

export class GetErResponseBodyContentErRouteMaps extends $dara.Model {
  /**
   * @remarks
   * Policy behavior
   * 
   * Valid value:
   * 
   * *   deny: rejects the.
   * *   permit: The allows.
   * 
   * @example
   * permit
   */
  action?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1645766599809
   */
  createTime?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 10.0.0.0/8
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-xkslnmsr
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * @example
   * route-map-name
   */
  erRouteMapName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1623899444000
   */
  gmtModified?: string;
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
   * The ID of the destination instance.
   * 
   * @example
   * vpd-sdkd2gkx
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * Reception-name
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the destination instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the destination instance.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
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
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Policy sequence number (1001-2000)
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
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
   * XXQGPROD-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * vpd-xmglsymg
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Source instance name
   * 
   * @example
   * test-transmission
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the source instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the source instance.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapName: 'ErRouteMapName',
      gmtModified: 'GmtModified',
      message: 'Message',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapNum: 'RouteMapNum',
      status: 'Status',
      tenantId: 'TenantId',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapName: 'string',
      gmtModified: 'string',
      message: 'string',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapNum: 'number',
      status: 'string',
      tenantId: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class GetErResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Network instance information list
   */
  erAttachments?: GetErResponseBodyContentErAttachments[];
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB Instance Name
   * 
   * @example
   * er-heyuan-main
   */
  erName?: string;
  /**
   * @remarks
   * The list of route entry information.
   */
  erRouteEntrys?: GetErResponseBodyContentErRouteEntrys[];
  /**
   * @remarks
   * routing policy information list
   */
  erRouteMaps?: GetErResponseBodyContentErRouteMaps[];
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1627545952000
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
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
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
   * List of Tags
   */
  tags?: GetErResponseBodyContentTags[];
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
      createTime: 'CreateTime',
      description: 'Description',
      erAttachments: 'ErAttachments',
      erId: 'ErId',
      erName: 'ErName',
      erRouteEntrys: 'ErRouteEntrys',
      erRouteMaps: 'ErRouteMaps',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      erAttachments: { 'type': 'array', 'itemType': GetErResponseBodyContentErAttachments },
      erId: 'string',
      erName: 'string',
      erRouteEntrys: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteEntrys },
      erRouteMaps: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteMaps },
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetErResponseBodyContentTags },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erAttachments)) {
      $dara.Model.validateArray(this.erAttachments);
    }
    if(Array.isArray(this.erRouteEntrys)) {
      $dara.Model.validateArray(this.erRouteEntrys);
    }
    if(Array.isArray(this.erRouteMaps)) {
      $dara.Model.validateArray(this.erRouteMaps);
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

export class GetErResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
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
  content?: GetErResponseBodyContent;
  /**
   * @remarks
   * Information returned when the call fails
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
   * 308DE9D2-03A6-5B44-A369-67B75D1EE091
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
      content: GetErResponseBodyContent,
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

