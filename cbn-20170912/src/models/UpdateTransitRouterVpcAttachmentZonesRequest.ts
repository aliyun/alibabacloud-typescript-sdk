// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that you want to add to the VPC connection.
   * 
   * You can specify at most 10 vSwitches in each call.
   * 
   * *   If the VPC connection belongs to the current Alibaba Cloud account, you can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the IDs of the vSwitches and zones of the VPC.
   * *   If the VPC connection belongs to another Alibaba Cloud account, you can call the [ListGrantVSwitchesToCen](https://help.aliyun.com/document_detail/427599.html) operation to query the IDs of the vSwitches and zones of the VPC.
   * 
   * @example
   * vsw-wz988dda8ldm4uvmx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the vSwitch that you want to add to the VPC connection is deployed.
   * 
   * You can specify at most 10 vSwitches in each call.
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
   * The ID of the vSwitch that you want to remove from the VPC connection.
   * 
   * You can remove at most 10 vSwitches from a VPC in each call.
   * 
   * @example
   * vsw-wz9f5izl6wshndmta****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the vSwitch that you want to remove from the VPC connection is deployed.
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
   * The zones and vSwitches that you want to add to the VPC connection.
   */
  addZoneMappings?: UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, ClientToken is set to the value of RequestId. The value of RequestId for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The zones and vSwitches that you want to remove from the VPC connection.
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

