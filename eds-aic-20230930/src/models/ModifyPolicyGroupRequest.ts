// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyGroupRequestNetRedirectPolicyRules extends $dara.Model {
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
   * example.com
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

export class ModifyPolicyGroupRequestNetRedirectPolicy extends $dara.Model {
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
   * The IP address of the transparent proxy. The value must be an IPv4 address.
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
   * The port for the transparent proxy. The port number must be an integer from 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password for the proxy. The password must be 1 to 256 characters in length and cannot contain Chinese characters or spaces.
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
   * The username for the proxy. The username must be 1 to 256 characters in length and cannot contain Chinese characters or spaces.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The proxy rules.
   */
  rules?: ModifyPolicyGroupRequestNetRedirectPolicyRules[];
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
      rules: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestNetRedirectPolicyRules },
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

export class ModifyPolicyGroupRequestWatermark extends $dara.Model {
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
   * The custom text for the watermark. The text can be up to 10 characters in length and cannot contain emoji characters.
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
   * The opacity of the watermark. A larger value makes the watermark more opaque. Valid values: 10 to 100.
   * 
   * @example
   * 25
   */
  watermarkTransparencyValue?: number;
  /**
   * @remarks
   * The content of the screen watermark.
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

export class ModifyPolicyGroupRequest extends $dara.Model {
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
   * The file transfer policy for the Wuying web client.
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
  netRedirectPolicy?: ModifyPolicyGroupRequestNetRedirectPolicy;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-4bi18ebi9tfjh****
   */
  policyGroupId?: string;
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
  /**
   * @remarks
   * The screen watermark.
   */
  watermark?: ModifyPolicyGroupRequestWatermark;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicy: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
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
      netRedirectPolicy: ModifyPolicyGroupRequestNetRedirectPolicy,
      policyGroupId: 'string',
      policyGroupName: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      watermark: ModifyPolicyGroupRequestWatermark,
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

