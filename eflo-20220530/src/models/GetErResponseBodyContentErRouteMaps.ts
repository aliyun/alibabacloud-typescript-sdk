// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

