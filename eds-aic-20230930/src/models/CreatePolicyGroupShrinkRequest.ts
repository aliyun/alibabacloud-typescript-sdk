// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupShrinkRequest extends $dara.Model {
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
   * The clipboard permissions.
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
   * The local disk mapping permissions.
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
   * The network redirection settings.
   */
  netRedirectPolicyShrink?: string;
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
   * The screen watermark settings.
   */
  watermarkShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicyShrink: 'NetRedirectPolicy',
      policyGroupName: 'PolicyGroupName',
      policyType: 'PolicyType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      watermarkShrink: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraRedirect: 'string',
      clipboard: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      lockResolution: 'string',
      netRedirectPolicyShrink: 'string',
      policyGroupName: 'string',
      policyType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      watermarkShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

