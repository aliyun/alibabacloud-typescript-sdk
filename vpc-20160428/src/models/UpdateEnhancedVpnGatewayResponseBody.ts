// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnhancedVpnGatewayResponseBodyEniInstanceIds extends $dara.Model {
  eniInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eniInstanceId)) {
      $dara.Model.validateArray(this.eniInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnhancedVpnGatewayResponseBodyTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnhancedVpnGatewayResponseBodyTags extends $dara.Model {
  tag?: UpdateEnhancedVpnGatewayResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': UpdateEnhancedVpnGatewayResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnhancedVpnGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP routes are automatically propagated to the VPC. Valid values:
   * 
   * - **true**: Automatic propagation is enabled.
   * 
   * - **false**: Automatic propagation is disabled.
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The timestamp when the Enhanced VPN Gateway was created. Unit: milliseconds.<br>
   * This value is a Unix timestamp that represents the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.<br>
   * 
   * @example
   * 1492753580000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the Enhanced VPN Gateway.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the second vSwitch with which the Enhanced VPN Gateway is associated.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * Indicates whether BGP is enabled for the Enhanced VPN Gateway. Valid values:<br>
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The ENIs created for the Enhanced VPN Gateway.
   */
  eniInstanceIds?: UpdateEnhancedVpnGatewayResponseBodyEniInstanceIds;
  /**
   * @remarks
   * The type of the Enhanced VPN Gateway. Only **Enhanced.SiteToSite** is returned, which indicates an enhanced site-to-site VPN gateway that supports only the IPsec-VPN feature.
   * 
   * - **Enhanced.SiteToSite**, an enhanced site-to-cloud VPN that supports only the IPsec feature.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name of the Enhanced VPN Gateway.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network type of the Enhanced VPN Gateway. Valid values:
   * 
   * - **public** (default): a public gateway.
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Enhanced VPN Gateway belongs.<br>
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the details of resource groups.<br>
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the Enhanced VPN Gateway.
   * 
   * - **init**: The gateway is being initialized.
   * 
   * - **provisioning**: The gateway is being provisioned.
   * 
   * - **active**: The gateway is active.
   * 
   * - **updating**: The gateway is being updated.
   * 
   * - **deleting**: The gateway is being deleted.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * A JSON string that indicates the features supported by the Enhanced VPN Gateway.
   * 
   * @example
   * {"VpnEnableBgp": true}
   */
  tag?: string;
  /**
   * @remarks
   * The tags of the Enhanced VPN Gateway.
   */
  tags?: UpdateEnhancedVpnGatewayResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch associated with the Enhanced VPN Gateway.
   * 
   * @example
   * vsw-bp1y9ovl1cu9ou4tv****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the Enhanced VPN Gateway belongs.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoel****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Enhanced VPN Gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The type of the Enhanced VPN Gateway.
   * 
   * - **Normal** (default): standard type.
   * 
   * @example
   * Normal
   */
  vpnType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPropagate: 'AutoPropagate',
      createTime: 'CreateTime',
      description: 'Description',
      disasterRecoveryVSwitchId: 'DisasterRecoveryVSwitchId',
      enableBgp: 'EnableBgp',
      eniInstanceIds: 'EniInstanceIds',
      gatewayType: 'GatewayType',
      name: 'Name',
      networkType: 'NetworkType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpnGatewayId: 'VpnGatewayId',
      vpnType: 'VpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPropagate: 'boolean',
      createTime: 'number',
      description: 'string',
      disasterRecoveryVSwitchId: 'string',
      enableBgp: 'boolean',
      eniInstanceIds: UpdateEnhancedVpnGatewayResponseBodyEniInstanceIds,
      gatewayType: 'string',
      name: 'string',
      networkType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: 'string',
      tags: UpdateEnhancedVpnGatewayResponseBodyTags,
      vSwitchId: 'string',
      vpcId: 'string',
      vpnGatewayId: 'string',
      vpnType: 'string',
    };
  }

  validate() {
    if(this.eniInstanceIds && typeof (this.eniInstanceIds as any).validate === 'function') {
      (this.eniInstanceIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

