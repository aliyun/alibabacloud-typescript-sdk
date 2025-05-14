// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy } from "./ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy";
import { ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources } from "./ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources";
import { ListPolicyGroupsResponseBodyPolicyGroupModelWatermark } from "./ListPolicyGroupsResponseBodyPolicyGroupModelWatermark";


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

