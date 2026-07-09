// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyGroupsResponseBodyPolicyGroupModelAccessPolicies extends $dara.Model {
  accessPolicyRuleId?: number;
  cidrIp?: string;
  description?: string;
  policy?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      accessPolicyRuleId: 'AccessPolicyRuleId',
      cidrIp: 'CidrIp',
      description: 'Description',
      policy: 'Policy',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPolicyRuleId: 'number',
      cidrIp: 'string',
      description: 'string',
      policy: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  /**
   * @remarks
   * The application package name or domain name.
   * 
   * @example
   * *.baidu.com
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
   * Indicates whether a transparent proxy is manually configured.
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The proxy IP address of the transparent proxy. The value must be in IPv4 format.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Indicates whether network redirection is enabled. After this feature is enabled, traffic is redirected to the client-side network by default.
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the transparent proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The proxy password. The value must be 1 to 256 characters in length and cannot contain Chinese characters or whitespace characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The proxy protocol type.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The proxy username. The value must be 1 to 256 characters in length and cannot contain Chinese characters or whitespace characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The list of proxy rules.
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
  /**
   * @remarks
   * The list of instance group IDs.
   */
  androidInstanceGroupIds?: string[];
  /**
   * @remarks
   * The list of matrix IDs.
   */
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
  /**
   * @remarks
   * The watermark font color. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * The custom watermark content. The value can be up to 10 characters in length and does not support emoji characters.
   * 
   * @example
   * custom text
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * The watermark font size. Valid values: 10 to 20.
   * 
   * @example
   * 12
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * The screen watermark switch.
   * 
   * @example
   * off
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The watermark opacity. A larger value indicates lower transparency. Valid values: 10 to 100.
   * 
   * @example
   * 25
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The screen watermark content.
   */
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
  accessPolicies?: ListPolicyGroupsResponseBodyPolicyGroupModelAccessPolicies[];
  /**
   * @remarks
   * Indicates whether local camera redirection is enabled.
   * 
   * @example
   * on
   */
  cameraRedirect?: string;
  /**
   * @remarks
   * The clipboard permission.
   * 
   * @example
   * readwrite
   */
  clipboard?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-06-04 10:28:54
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The file transfer policy for the HTML5 client.
   * 
   * @example
   * download
   */
  html5FileTransfer?: string;
  /**
   * @remarks
   * The local disk mapping permission.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * The locked resolution.
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The network redirection settings.
   */
  netRedirectPolicy?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-9q6o8qpiy8opkj****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Default policy.
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The resources associated with the policy.
   */
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
  /**
   * @remarks
   * The screen watermark settings.
   */
  watermark?: ListPolicyGroupsResponseBodyPolicyGroupModelWatermark;
  static names(): { [key: string]: string } {
    return {
      accessPolicies: 'AccessPolicies',
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
      accessPolicies: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModelAccessPolicies },
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
    if(Array.isArray(this.accessPolicies)) {
      $dara.Model.validateArray(this.accessPolicies);
    }
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
   * The pagination token that indicates the position up to which data has been read in the current call. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy information.
   */
  policyGroupModel?: ListPolicyGroupsResponseBodyPolicyGroupModel[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

