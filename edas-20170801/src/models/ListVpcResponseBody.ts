// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcResponseBodyVpcListVpcEntity extends $dara.Model {
  /**
   * @remarks
   * This operation uses only common request headers. For more information, see [Common parameters for API calls](https://help.aliyun.com/document_detail/123488.html).
   * 
   * @example
   * 0
   */
  ecsNum?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * No request parameters.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * GET /pop/v5/vpc_list HTTP/1.1
   * Common request headers
   * 
   * @example
   * edas_****_test@aliyun-****.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * vpc-wz9pcq3jofczwpujq****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of ECS instances associated with the VPC.
   * 
   * @example
   * edas-default-vpc4
   */
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
  /**
   * @remarks
   * Indicates whether the VPC is available. Valid values:
   * - true: The VPC is available.
   * - false: The VPC is unavailable.
   */
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

