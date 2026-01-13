// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByVpcResponseBodyVpcInfos extends $dara.Model {
  /**
   * @example
   * http://xu6666-mkdd-test.cn-hangzhou.vpc.ots.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * http://172.**.***.34:80/
   */
  endpoint?: string;
  /**
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @example
   * xu6666
   */
  instanceVpcName?: string;
  /**
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
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 4141784E-91FF-56E3-9371-FD011FF876F4
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1***********0mh8
   */
  vpcId?: string;
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

