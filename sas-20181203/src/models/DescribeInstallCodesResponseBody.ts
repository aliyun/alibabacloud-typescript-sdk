// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstallCodesResponseBodyInstallCodes extends $dara.Model {
  /**
   * @remarks
   * The verification code for you to manually install the Security Center agent.
   * 
   * @example
   * 15v02r
   */
  captchaCode?: string;
  /**
   * @remarks
   * The timestamp generated when the commands used to install the Security Center agent expire. Unit: milliseconds.
   * 
   * @example
   * 1637810007000
   */
  expiredDate?: number;
  /**
   * @remarks
   * The ID of the server group to which the server belongs.
   * 
   * @example
   * 9165712
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the server group to which the server belongs.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an image is used to install the Security Center agent. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  onlyImage?: boolean;
  /**
   * @remarks
   * The operating system of the server. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The ID of the PrivateLink endpoint.
   * 
   * @example
   * 123
   */
  privateLinkEndpointId?: number;
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * @example
   * proxy_test
   */
  proxyCluster?: string;
  /**
   * @remarks
   * The name of the server provider.
   * 
   * @example
   * ALIYUN
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
      expiredDate: 'ExpiredDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      onlyImage: 'OnlyImage',
      os: 'Os',
      privateLinkEndpointId: 'PrivateLinkEndpointId',
      proxyCluster: 'ProxyCluster',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaCode: 'string',
      expiredDate: 'number',
      groupId: 'number',
      groupName: 'string',
      onlyImage: 'boolean',
      os: 'string',
      privateLinkEndpointId: 'number',
      proxyCluster: 'string',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the installation commands.
   */
  installCodes?: DescribeInstallCodesResponseBodyInstallCodes[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C0D6119F-92EE-1276-B8B6-C81A7F9D57F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      installCodes: 'InstallCodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installCodes: { 'type': 'array', 'itemType': DescribeInstallCodesResponseBodyInstallCodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.installCodes)) {
      $dara.Model.validateArray(this.installCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

