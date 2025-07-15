// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The type of the rule.
   * 
   * Valid values:
   * 
   * *   prc: an application package name.
   * *   domain: a domain name.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  /**
   * @remarks
   * The name of the application package or domain name.
   * 
   * @example
   * *.example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a custom proxy is manually configured.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IPv4 address of the custom proxy.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Indicates whether the network redirection feature is enabled. When this feature is enabled, network traffic is automatically redirected to the on-premises network by default.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the custom proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password of the proxy. The password must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The type of the proxy protocol.
   * 
   * Valid values:
   * 
   * *   socks5.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy. The name must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The proxy rules.
   */
  rules?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules[];
  static names(): { [key: string]: string } {
    return {
      customProxy: 'CustomProxy',
      hostAddr: 'HostAddr',
      netRedirect: 'NetRedirect',
      port: 'Port',
      proxyPassword: 'ProxyPassword',
      proxyType: 'ProxyType',
      proxyUserName: 'ProxyUserName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProxy: 'string',
      hostAddr: 'string',
      netRedirect: 'string',
      port: 'string',
      proxyPassword: 'string',
      proxyType: 'string',
      proxyUserName: 'string',
      rules: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources extends $dara.Model {
  androidInstanceGroupIds?: string[];
  cloudPhoneMatrixIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupIds: 'AndroidInstanceGroupIds',
      cloudPhoneMatrixIds: 'CloudPhoneMatrixIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      cloudPhoneMatrixIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceGroupIds)) {
      $dara.Model.validateArray(this.androidInstanceGroupIds);
    }
    if(Array.isArray(this.cloudPhoneMatrixIds)) {
      $dara.Model.validateArray(this.cloudPhoneMatrixIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelWatermark extends $dara.Model {
  watermarkColor?: number;
  watermarkCustomText?: string;
  watermarkFontSize?: number;
  watermarkSwitch?: string;
  watermarkTransparencyValue?: number;
  watermarkTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      watermarkColor: 'WatermarkColor',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkFontSize: 'WatermarkFontSize',
      watermarkSwitch: 'WatermarkSwitch',
      watermarkTransparencyValue: 'WatermarkTransparencyValue',
      watermarkTypes: 'WatermarkTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkColor: 'number',
      watermarkCustomText: 'string',
      watermarkFontSize: 'number',
      watermarkSwitch: 'string',
      watermarkTransparencyValue: 'number',
      watermarkTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.watermarkTypes)) {
      $dara.Model.validateArray(this.watermarkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModel extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the webcam redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The read/write permissions on the clipboard.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: read and write.
   * *   off: read/write disabled.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2024-06-04 10:28:54
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The file transfer policy of the HTML5 client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * download
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The read/write permissions on the on-premises drive.
   * 
   * Valid values:
   * 
   * *   read: read-only.
   * *   readwrite: ready and write.
   * *   off: read/write denied.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Identifies whether the resolution is locked.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection policy.
   */
  netRedirectPolicy?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-9q6o8qpiy8opkj****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * Default Policy
   */
  policyGroupName?: string;
  policyRelatedResources?: ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources;
  /**
   * @remarks
   * The height of the resolution.
   * 
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution.
   * 
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  watermark?: ListPolicyGroupsResponseBodyPolicyGroupModelWatermark;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      gmtCreate: 'GmtCreate',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      policyRelatedResources: 'PolicyRelatedResources',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      gmtCreate: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicy: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy,
      policyGroupId: 'string',
      policyGroupName: 'string',
      policyRelatedResources: ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources,
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      watermark: ListPolicyGroupsResponseBodyPolicyGroupModelWatermark,
    };
  }

  validate() {
    if(this.netRedirectPolicy && typeof (this.netRedirectPolicy as any).validate === 'function') {
      (this.netRedirectPolicy as any).validate();
    }
    if(this.policyRelatedResources && typeof (this.policyRelatedResources as any).validate === 'function') {
      (this.policyRelatedResources as any).validate();
    }
    if(this.watermark && typeof (this.watermark as any).validate === 'function') {
      (this.watermark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policies.
   */
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 31
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyGroupModel: 'PolicyGroupModel',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyGroupModel: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModel },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupModel)) {
      $dara.Model.validateArray(this.policyGroupModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

