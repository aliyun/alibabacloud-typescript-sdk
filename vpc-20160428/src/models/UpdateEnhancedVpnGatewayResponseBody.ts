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
   * Indicates whether BGP route automatic propagation to the VPC is enabled. Valid values:
   * - **true**: Automatic propagation is enabled.
   * 
   * - **false**: Automatic propagation is not enabled.
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The timestamp when the enhanced VPN gateway instance was created. Unit: milliseconds.<br>
   * The timestamp follows the UNIX time format, which represents the total number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492753580000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the enhanced VPN gateway instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the second vSwitch associated with the enhanced VPN gateway instance.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * The enabling status of the BGP feature for the enhanced VPN gateway. Valid values:<br>
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  eniInstanceIds?: UpdateEnhancedVpnGatewayResponseBodyEniInstanceIds;
  /**
   * @remarks
   * The type of the enhanced VPN gateway. Valid values:
   * 
   * - **Enhanced.SiteToSite**: enhanced site-to-cloud VPN that supports only IPsec functionality.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name of the enhanced VPN gateway instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network type of the enhanced VPN gateway. Valid values:
   * - **public** (default): public VPN gateway.
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
   * The ID of the resource group to which the enhanced VPN gateway instance belongs.<br>
   * You can call [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query resource group information.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the enhanced VPN gateway.
   * - **init**: initializing.
   * - **provisioning**: preparing.
   * - **active**: normal.
   * - **updating**: updating.
   * - **deleting**: deleting.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The list of features supported by the enhanced VPN gateway.
   * 
   * @example
   * {"VpnEnableBgp": true}
   */
  tag?: string;
  tags?: UpdateEnhancedVpnGatewayResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch associated with the enhanced VPN gateway instance.
   * 
   * @example
   * vsw-bp1y9ovl1cu9ou4tv****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the enhanced VPN gateway instance belongs.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoel****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the enhanced VPN gateway instance.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The type of the enhanced VPN gateway.
   * 
   * - **Normal** (default): standard.
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

