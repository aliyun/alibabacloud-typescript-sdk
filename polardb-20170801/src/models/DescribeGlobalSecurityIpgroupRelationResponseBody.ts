// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel } from "./DescribeGlobalSecurityIpgroupRelationResponseBodyGlobalSecurityIpgroupRel";


export class DescribeGlobalSecurityIPGroupRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The details of the global IP whitelist template.
   */
  globalSecurityIPGroupRel?: DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroupRel)) {
      $dara.Model.validateArray(this.globalSecurityIPGroupRel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

