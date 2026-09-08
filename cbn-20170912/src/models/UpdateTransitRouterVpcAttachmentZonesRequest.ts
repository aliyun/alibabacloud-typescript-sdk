// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch to add to the VPC connection.
   * 
   * You can add up to 10 vSwitches at a time.
   * 
   * - If the Alibaba Cloud account that you use to log on and the VPC-connected instance belong to the same account, you can invoke the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the vSwitch IDs and the IDs of the zones to which the vSwitches belong in the VPC-connected instance.
   * - If the Alibaba Cloud account that you use to log on and the VPC-connected instance belong to different accounts, you can invoke the [ListGrantVSwitchesToCen](https://help.aliyun.com/document_detail/427599.html) operation to query the vSwitch IDs and the IDs of the zones to which the vSwitches belong in the VPC-connected instance.
   * 
   * If you set **VSwitchId**, you must also set **ZoneId**.
   * 
   * @example
   * vsw-wz988dda8ldm4uvmx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch to add to the VPC connection belongs.
   * 
   * You can add up to 10 vSwitches at a time.
   * 
   * If you set **ZoneId**, you must also set **VSwitchId**.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch to remove from the VPC connection.
   * 
   * You can remove up to 10 vSwitches at a time.
   * 
   * If you set **VSwitchId**, you must also set **ZoneId**.
   * 
   * @example
   * vsw-wz9f5izl6wshndmta****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch to remove from the VPC connection belongs.
   * 
   * You can remove up to 10 vSwitches at a time.
   * 
   * If you set **ZoneId**, you must also set **VSwitchId**.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of zones and vSwitches to add to the VPC connection.
   */
  addZoneMappings?: UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the error code `DryRunOperation` is returned. The zones and vSwitches of the VPC connection are not modified.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the zones and vSwitches of the VPC connection are modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of zones and vSwitches to remove from the VPC connection.
   */
  removeZoneMappings?: UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-9bbqyygouv4cpn****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      addZoneMappings: 'AddZoneMappings',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      removeZoneMappings: 'RemoveZoneMappings',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addZoneMappings: { 'type': 'array', 'itemType': UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings },
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      removeZoneMappings: { 'type': 'array', 'itemType': UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addZoneMappings)) {
      $dara.Model.validateArray(this.addZoneMappings);
    }
    if(Array.isArray(this.removeZoneMappings)) {
      $dara.Model.validateArray(this.removeZoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

