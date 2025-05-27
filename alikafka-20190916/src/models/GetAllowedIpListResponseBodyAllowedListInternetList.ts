// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllowedIpListResponseBodyAllowedListInternetList extends $dara.Model {
  /**
   * @remarks
   * The group to which the IP address whitelist belongs.
   */
  allowedIpGroup?: { [key: string]: string };
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  allowedIpList?: string[];
  blackIPList?: string[];
  blackIPMap?: { [key: string]: string };
  /**
   * @remarks
   * The port range. Valid value:
   * 
   * **9093/9093**.
   * 
   * @example
   * 9093/9093
   */
  portRange?: string;
  securityGroupId?: string;
  userDefinedSharedSecurityGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedIpGroup: 'AllowedIpGroup',
      allowedIpList: 'AllowedIpList',
      blackIPList: 'BlackIPList',
      blackIPMap: 'BlackIPMap',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      userDefinedSharedSecurityGroup: 'UserDefinedSharedSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedIpGroup: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      allowedIpList: { 'type': 'array', 'itemType': 'string' },
      blackIPList: { 'type': 'array', 'itemType': 'string' },
      blackIPMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      portRange: 'string',
      securityGroupId: 'string',
      userDefinedSharedSecurityGroup: 'boolean',
    };
  }

  validate() {
    if(this.allowedIpGroup) {
      $dara.Model.validateMap(this.allowedIpGroup);
    }
    if(Array.isArray(this.allowedIpList)) {
      $dara.Model.validateArray(this.allowedIpList);
    }
    if(Array.isArray(this.blackIPList)) {
      $dara.Model.validateArray(this.blackIPList);
    }
    if(this.blackIPMap) {
      $dara.Model.validateMap(this.blackIPMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

