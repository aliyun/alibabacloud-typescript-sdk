// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestNetRedirectPolicyRules extends $dara.Model {
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

export class CreatePolicyGroupRequestNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to manually configure a custom proxy.
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
   * Specifies whether to enable the network redirection feature.
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
   * The proxy rules. You can create up to 100 proxy rules.
   */
  rules?: CreatePolicyGroupRequestNetRedirectPolicyRules[];
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
      rules: { 'type': 'array', 'itemType': CreatePolicyGroupRequestNetRedirectPolicyRules },
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

export class CreatePolicyGroupRequestWatermark extends $dara.Model {
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

export class CreatePolicyGroupRequest extends $dara.Model {
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
   * off
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
   * The file transfer policy of the Alibaba Cloud Workspace web client.
   * 
   * Valid values:
   * 
   * *   all: File upload and download are supported.
   * *   download: Only file download is supported.
   * *   upload: Only file upload is supported.
   * *   off: File upload or download is forbidden.
   * 
   * @example
   * off
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
   * *   off: read/write disabled.
   * 
   * @example
   * off
   */
  localDrive?: string;
  /**
   * @remarks
   * Specifies whether to lock the resolution.
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
  netRedirectPolicy?: CreatePolicyGroupRequestNetRedirectPolicy;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * defaultPolicy
   */
  policyGroupName?: string;
  policyType?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  watermark?: CreatePolicyGroupRequestWatermark;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicy: CreatePolicyGroupRequestNetRedirectPolicy,
      policyGroupName: 'string',
      policyType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      watermark: CreatePolicyGroupRequestWatermark,
    };
  }

  validate() {
    if(this.netRedirectPolicy && typeof (this.netRedirectPolicy as any).validate === 'function') {
      (this.netRedirectPolicy as any).validate();
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

