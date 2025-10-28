// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlbResponseBodySlbListSlbEntity extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 39.176.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The type of the IP addresses. Valid values:
   * 
   * *   internet: Users can connect to the SLB instance over the Internet.
   * *   intranet: Users can connect to the SLB instance over the internal network.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the SLB instance has expired. Valid values:
   * 
   * *   true: The SLB instance has expired.
   * *   false: The SLB instance has not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The ID of the resource group in Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 0
   */
  groupId?: number;
  /**
   * @remarks
   * The type of the network.
   * 
   * @example
   * classic
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether Kubernetes applications can be reused. Valid values:
   * 
   * *   true: Kubernetes applications can be reused.
   * *   false: Kubernetes applications cannot be reused.
   * 
   * @example
   * true
   */
  reusable?: boolean;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-2ze055t3xv7s8****
   */
  slbId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * adce
   */
  slbName?: string;
  /**
   * @remarks
   * The status of the SLB instance.
   * 
   * @example
   * active
   */
  slbStatus?: string;
  /**
   * @remarks
   * The tag of the SLB instance.
   * 
   * @example
   * [{"tagKey":"tag","tagValue":"value"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * edas_****_**st@aliyun-****.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1f90rfybszjogyw****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * vsw-bp156w1gpbv0o50hs****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      expired: 'Expired',
      groupId: 'GroupId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      reusable: 'Reusable',
      slbId: 'SlbId',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
      tags: 'Tags',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      expired: 'boolean',
      groupId: 'number',
      networkType: 'string',
      regionId: 'string',
      reusable: 'boolean',
      slbId: 'string',
      slbName: 'string',
      slbStatus: 'string',
      tags: 'string',
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponseBodySlbList extends $dara.Model {
  slbEntity?: ListSlbResponseBodySlbListSlbEntity[];
  static names(): { [key: string]: string } {
    return {
      slbEntity: 'SlbEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbEntity: { 'type': 'array', 'itemType': ListSlbResponseBodySlbListSlbEntity },
    };
  }

  validate() {
    if(Array.isArray(this.slbEntity)) {
      $dara.Model.validateArray(this.slbEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  /**
   * @remarks
   * The list of SLB instances.
   */
  slbList?: ListSlbResponseBodySlbList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      slbList: 'SlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      slbList: ListSlbResponseBodySlbList,
    };
  }

  validate() {
    if(this.slbList && typeof (this.slbList as any).validate === 'function') {
      (this.slbList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

