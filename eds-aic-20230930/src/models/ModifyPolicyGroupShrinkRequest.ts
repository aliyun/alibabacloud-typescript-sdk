// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyGroupShrinkRequest extends $dara.Model {
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
  netRedirectPolicyShrink?: string;
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
  watermarkShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cameraRedirect: 'CameraRedirect',
      clipboard: 'Clipboard',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      lockResolution: 'LockResolution',
      netRedirectPolicyShrink: 'NetRedirectPolicy',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
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
      policyGroupId: 'string',
      policyGroupName: 'string',
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

