// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByAgentStorageResponseBodyVpcInfos extends $dara.Model {
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * remua
   */
  agentStorageVpcName?: string;
  /**
   * @remarks
   * The VPC access address.
   * 
   * @example
   * http://remua-agent-test.cn-beijing.vpc.ots.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The endpoint of the agent storage.
   * 
   * @example
   * http://172.**.***.34:80/
   */
  endpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
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
      agentStorageVpcName: 'AgentStorageVpcName',
      domain: 'Domain',
      endpoint: 'Endpoint',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageVpcName: 'string',
      domain: 'string',
      endpoint: 'string',
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

export class ListVpcInfoByAgentStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent storage name.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 8
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
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
   * The VPC details.
   */
  vpcInfos?: ListVpcInfoByAgentStorageResponseBodyVpcInfos[];
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcInfos: { 'type': 'array', 'itemType': ListVpcInfoByAgentStorageResponseBodyVpcInfos },
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

