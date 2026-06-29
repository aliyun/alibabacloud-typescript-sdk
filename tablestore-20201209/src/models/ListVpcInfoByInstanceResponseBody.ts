// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByInstanceResponseBodyVpcInfos extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the VPC.
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
   * The name of the VPC.
   * 
   * @example
   * xu6666
   */
  instanceVpcName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * @remarks
   * The name of the instance.
   * 
   * @example
   * mkdd-test
   */
  instanceName?: string;
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
   * 8
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate and troubleshoot issues.
   * 
   * @example
   * 44FDC379-4443-560E-B652-9F7476D8854F
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
   * The details of the VPCs.
   */
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

