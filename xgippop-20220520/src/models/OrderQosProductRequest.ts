// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class OrderQosProductRequest extends $dara.Model {
  aliUid?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  IPv6?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ipType?: string;
  mobileNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operator?: string;
  privateIpv4?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productId?: string;
  provice?: string;
  publicIpv4?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qosRequestId?: string;
  targetIpList?: string[];
  token?: string;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      channelId: 'ChannelId',
      IPv6: 'IPv6',
      instanceId: 'InstanceId',
      ipType: 'IpType',
      mobileNumber: 'MobileNumber',
      operator: 'Operator',
      privateIpv4: 'PrivateIpv4',
      productId: 'ProductId',
      provice: 'Provice',
      publicIpv4: 'PublicIpv4',
      qosRequestId: 'QosRequestId',
      targetIpList: 'TargetIpList',
      token: 'Token',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      channelId: 'string',
      IPv6: 'string',
      instanceId: 'string',
      ipType: 'string',
      mobileNumber: 'string',
      operator: 'string',
      privateIpv4: 'string',
      productId: 'string',
      provice: 'string',
      publicIpv4: 'string',
      qosRequestId: 'string',
      targetIpList: { 'type': 'array', 'itemType': 'string' },
      token: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetIpList)) {
      $dara.Model.validateArray(this.targetIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

