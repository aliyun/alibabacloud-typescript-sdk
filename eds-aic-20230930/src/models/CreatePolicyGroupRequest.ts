// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestNetRedirectPolicyRules extends $dara.Model {
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

export class CreatePolicyGroupRequestNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to manually configure a transparent proxy.
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IP address of the transparent proxy. The IP address must be in IPv4 format.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Specifies whether to enable network redirection.
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
   * The proxy password. The password must be 1 to 256 characters in length. It cannot contain Chinese characters or whitespace characters.
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
   * The proxy username. The username must be 1 to 256 characters in length. It cannot contain Chinese characters or whitespace characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The list of proxy rules. You can specify up to 100 rules.
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
  /**
   * @remarks
   * The font color of the watermark. Valid values: 0 to 16777215.
   * 
   * @example
   * 0
   */
  watermarkColor?: number;
  /**
   * @remarks
   * The custom text for the watermark. The text can be up to 10 characters long and cannot contain emojis.
   * 
   * @example
   * custom text
   */
  watermarkCustomText?: string;
  /**
   * @remarks
   * The font size of the watermark. Valid values: 10 to 20.
   * 
   * @example
   * 12
   */
  watermarkFontSize?: number;
  /**
   * @remarks
   * Specifies whether to enable the screen watermark.
   * 
   * @example
   * off
   */
  watermarkSwitch?: string;
  /**
   * @remarks
   * The opacity of the watermark. A larger value indicates lower transparency. Valid values: 10 to 100.
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

export class CreatePolicyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable local camera redirection.
   * 
   * @example
   * off
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
   * The file transfer policy for the web client.
   * 
   * @example
   * off
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
   * Specifies whether to lock the resolution.
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * Network redirection.
   */
  netRedirectPolicy?: CreatePolicyGroupRequestNetRedirectPolicy;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Default policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * Instance
   */
  policyType?: string;
  /**
   * @remarks
   * The resolution height, in pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution width, in pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * Screen watermark.
   */
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

