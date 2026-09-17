// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoRequestPatch extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically set the patch as the stable patch after a successful upload. Default value: false.
   * 
   * @example
   * false
   */
  asStablePatch?: boolean;
  /**
   * @remarks
   * The download URL of the patch package.
   * Either RenderingInstanceId or DownloadURL is required. DownloadURL takes priority.
   * 
   * @example
   * https://test_host/app/test-tar-pkg.tar
   */
  downloadURL?: string;
  /**
   * @remarks
   * The MD5 hash of the patch package, used for integrity verification. Valid only when DownloadURL is not empty. Required when DownloadURL is not empty.
   * 
   * @example
   * 346f6404395adfg5bae1e45g4e943bf7
   */
  md5?: string;
  /**
   * @remarks
   * The name or description of the patch package, which serves as a unique identifier under the AppId.
   * Naming conventions:
   * 1. Cannot be set to origin or all.
   * 2. Must be 1 to 50 characters in length.
   * 3. Can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 4. Must start and end with a letter or digit.
   * 
   * @example
   * p1
   */
  patchName?: string;
  /**
   * @remarks
   * The format of the installation package. The default value is the file extension of the download URL. Valid only when DownloadURL is not empty. Valid values:
   * 1. tar.gz
   * 2. tar
   * 3. zip
   * 4. rar
   * 
   * @example
   * tar
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The relative path of the post-command within the application package. Only supported for Windows applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for the post-command execution, in seconds. Only supported for Windows applications.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The instance ID of the instance used to create the patch package. Valid only for Android application marketplace scenarios (PkgType=andrpid_appmarket). Either RenderingInstanceId or DownloadURL is required. DownloadURL takes priority.
   * 
   * @example
   * render-d7ec79fe47ce47aca2d8d7500d25a28a
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      asStablePatch: 'AsStablePatch',
      downloadURL: 'DownloadURL',
      md5: 'Md5',
      patchName: 'PatchName',
      pkgFormat: 'PkgFormat',
      postCommandPath: 'PostCommandPath',
      postCommandTimeoutSec: 'PostCommandTimeoutSec',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asStablePatch: 'boolean',
      downloadURL: 'string',
      md5: 'string',
      patchName: 'string',
      pkgFormat: 'string',
      postCommandPath: 'string',
      postCommandTimeoutSec: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID, which corresponds to a unique application package.
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * For testing purposes
   */
  description?: string;
  /**
   * @remarks
   * The information about the patch package to upload.
   * 1. Not supported when PkgType is set to android.
   * 2. Only one patch can be in the uploading state at a time for the same AppId (only one patch in a non-final state is allowed per AppId).
   */
  patch?: UpdateCloudAppInfoRequestPatch;
  /**
   * @remarks
   * The cloud application labels. You can select multiple labels. This operation resets the cloud application labels.
   * 1. Valid values:
   *   a. hot
   *   b. game
   *   c. app
   * 2. Special cases:
   *   a. To delete all labels, set this parameter to ["NULL"].
   */
  pkgLabels?: string[];
  /**
   * @remarks
   * The stable PatchId. When a PatchId is not specified during business operations (such as session startup), this PatchId is used by default. Not supported when PkgType is set to android.
   * Special values:
   * 1. origin: cancels the patch version and uses the initial version by default.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  stablePatchId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      patch: 'Patch',
      pkgLabels: 'PkgLabels',
      stablePatchId: 'StablePatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      patch: UpdateCloudAppInfoRequestPatch,
      pkgLabels: { 'type': 'array', 'itemType': 'string' },
      stablePatchId: 'string',
    };
  }

  validate() {
    if(this.patch && typeof (this.patch as any).validate === 'function') {
      (this.patch as any).validate();
    }
    if(Array.isArray(this.pkgLabels)) {
      $dara.Model.validateArray(this.pkgLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

