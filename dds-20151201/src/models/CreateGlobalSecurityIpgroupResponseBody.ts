// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * @example
   * 111.207.194.217,61.149.7.154
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * @example
   * developer
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-2ifynl1jfkdlhhxgva3q
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
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

export class CreateGlobalSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist templates.
   */
  globalSecurityIPGroup?: CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
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
      globalSecurityIPGroup: { 'type': 'array', 'itemType': CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
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

