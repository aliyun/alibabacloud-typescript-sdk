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
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @example
   * 1492753580000
   */
  createTime?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @example
   * true
   */
  enableBgp?: boolean;
  eniInstanceIds?: UpdateEnhancedVpnGatewayResponseBodyEniInstanceIds;
  /**
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * public
   */
  networkType?: string;
  /**
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * {"VpnEnableBgp": true}
   */
  tag?: string;
  tags?: UpdateEnhancedVpnGatewayResponseBodyTags;
  /**
   * @example
   * vsw-bp1y9ovl1cu9ou4tv****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1ub1yt9cvakoel****
   */
  vpcId?: string;
  /**
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  /**
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

