// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByVpcResponseBodyVpcInfos extends $dara.Model {
  /**
   * @remarks
   * The VPC endpoint.
   * 
   * @example
   * http://xu6666-mkdd-test.cn-hangzhou.vpc.ots.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * http://172.**.***.34:80/
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * xu6666
   */
  instanceVpcName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      instanceName: 'string',
      instanceVpcName: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4141784E-91FF-56E3-9371-FD011FF876F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of VPCs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1***********0mh8
   */
  vpcId?: string;
  /**
   * @remarks
   * The details of the VPCs.
   */
  vpcInfos?: ListVpcInfoByVpcResponseBodyVpcInfos[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcId: 'VpcId',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcId: 'string',
      vpcInfos: { 'type': 'array', 'itemType': ListVpcInfoByVpcResponseBodyVpcInfos },
    };
  }

  validate() {
    if(Array.isArray(this.vpcInfos)) {
      $dara.Model.validateArray(this.vpcInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

