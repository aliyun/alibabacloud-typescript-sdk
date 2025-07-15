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

export class GetAllowedIpListResponseBodyAllowedListVpcList extends $dara.Model {
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
   * **9092/9092**.
   * 
   * @example
   * 9092/9092
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

export class GetAllowedIpListResponseBodyAllowedList extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the instance. Valid values:
   * 
   * *   **4**: allows access from the Internet and a virtual private cloud (VPC).
   * *   **5**: allows access from a VPC.
   * 
   * >  Only integrators need to concern themselves with the value of this parameter.
   * 
   * @example
   * 4
   */
  deployType?: number;
  /**
   * @remarks
   * The whitelist for access from the Internet.
   */
  internetList?: GetAllowedIpListResponseBodyAllowedListInternetList[];
  /**
   * @remarks
   * The whitelist for access from a virtual private cloud (VPC).
   */
  vpcList?: GetAllowedIpListResponseBodyAllowedListVpcList[];
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      internetList: 'InternetList',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'number',
      internetList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListInternetList },
      vpcList: { 'type': 'array', 'itemType': GetAllowedIpListResponseBodyAllowedListVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.internetList)) {
      $dara.Model.validateArray(this.internetList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowedIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  allowedList?: GetAllowedIpListResponseBodyAllowedList;
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A421CCD7-5BC5-4B32-8DD8-64668A8FCB56
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedList: 'AllowedList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedList: GetAllowedIpListResponseBodyAllowedList,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.allowedList && typeof (this.allowedList as any).validate === 'function') {
      (this.allowedList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

