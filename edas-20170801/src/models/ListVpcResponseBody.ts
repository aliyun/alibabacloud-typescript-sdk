// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcResponseBodyVpcListVpcEntity extends $dara.Model {
  ecsNum?: number;
  expired?: boolean;
  regionId?: string;
  userId?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      ecsNum: 'EcsNum',
      expired: 'Expired',
      regionId: 'RegionId',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsNum: 'number',
      expired: 'boolean',
      regionId: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponseBodyVpcList extends $dara.Model {
  vpcEntity?: ListVpcResponseBodyVpcListVpcEntity[];
  static names(): { [key: string]: string } {
    return {
      vpcEntity: 'VpcEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEntity: { 'type': 'array', 'itemType': ListVpcResponseBodyVpcListVpcEntity },
    };
  }

  validate() {
    if(Array.isArray(this.vpcEntity)) {
      $dara.Model.validateArray(this.vpcEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about VPCs.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  vpcList?: ListVpcResponseBodyVpcList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      vpcList: ListVpcResponseBodyVpcList,
    };
  }

  validate() {
    if(this.vpcList && typeof (this.vpcList as any).validate === 'function') {
      (this.vpcList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

