// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * A list of clusters that are associated with the IP address whitelist template.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas. A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP address whitelists.
   * 
   * @example
   * 192.168.0.1
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP address whitelist template. The name must meet the following requirements:
   * 
   * - It must consist of lowercase letters, digits, and underscores (_).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be 2 to 120 characters in length.
   * 
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP address whitelist template.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the global IP address whitelist template.
   */
  globalSecurityIPGroup?: ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
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
      globalSecurityIPGroup: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
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

