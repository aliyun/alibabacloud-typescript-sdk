// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByInstanceResponseBodyVpcInfos extends $dara.Model {
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
   * xu6666
   */
  instanceVpcName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-2z***********n7w3dl
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      instanceVpcName: 'InstanceVpcName',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      instanceVpcName: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * mkdd-test
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 8
   */
  pageSize?: number;
  /**
   * @example
   * 44FDC379-4443-560E-B652-9F7476D8854F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  vpcInfos?: ListVpcInfoByInstanceResponseBodyVpcInfos[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcInfos: { 'type': 'array', 'itemType': ListVpcInfoByInstanceResponseBodyVpcInfos },
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

