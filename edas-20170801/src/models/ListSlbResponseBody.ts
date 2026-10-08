// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlbResponseBodySlbListSlbEntity extends $dara.Model {
  address?: string;
  addressType?: string;
  expired?: boolean;
  groupId?: number;
  networkType?: string;
  regionId?: string;
  reusable?: boolean;
  slbId?: string;
  slbName?: string;
  slbStatus?: string;
  tags?: string;
  userId?: string;
  vpcId?: string;
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
   * The interface status or POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information.
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
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
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

