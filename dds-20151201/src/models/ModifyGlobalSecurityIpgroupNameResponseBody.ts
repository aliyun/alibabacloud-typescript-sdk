// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * @example
   * 222.70.197.187
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * def
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-qiawi8ec1urcx9swoy37
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The global IP whitelist templates.
   */
  globalSecurityIPGroup?: ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroup)) {
      $dara.Model.validateArray(this.globalSecurityIPGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

