// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoRequestPatch extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically set the patch as the stable version after it is successfully uploaded. The default value is false.
   * 
   * @example
   * false
   */
  asStablePatch?: boolean;
  /**
   * @remarks
   * The download URL for the patch package.
   * You must specify either RenderingInstanceId or DownloadURL.
   * DownloadURL takes precedence.
   * 
   * @example
   * https://test_host/app/test-tar-pkg.tar
   */
  downloadURL?: string;
  /**
   * @remarks
   * The MD5 hash of the patch package, used to verify integrity. This parameter is valid only if DownloadURL is not empty. It is required if DownloadURL is not empty.
   * 
   * @example
   * 346f6404395adfg5bae1e45g4e943bf7
   */
  md5?: string;
  /**
   * @remarks
   * The name or description of the patch package. This is a unique identifier under the AppId.
   * Default naming conventions:
   * 
   * 1. Cannot be origin or all.
   * 
   * 2. Must be 1 to 50 characters in length.
   * 
   * 3. Can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 4. The first and last characters must be a letter or a digit.
   * 
   * @example
   * p1
   */
  patchName?: string;
  /**
   * @remarks
   * The format of the installation package. By default, the system uses the file extension from the download URL. This parameter is valid only if DownloadURL is not empty. Valid values:
   * 
   * 1. tar.gz
   * 
   * 2. tar
   * 
   * 3. zip
   * 
   * 4. rar
   * 
   * @example
   * tar
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The instance ID required to create the patch package. This parameter is valid only in the Android application marketplace scenario (PkgType=andrpid_appmarket). Specify either RenderingInstanceId or DownloadURL. DownloadURL takes precedence.
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
   * The ID of the cloud application, which corresponds to a unique application package.
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
   * 用于测试使用
   */
  description?: string;
  /**
   * @remarks
   * Information about the patch package to upload.
   * 
   * 1. This parameter is not supported when PkgType is android.
   * 
   * 2. For the same AppId, only one patch can be in the process of uploading at a time. This means only one patch can be in a state other than its desired state.
   */
  patch?: UpdateCloudAppInfoRequestPatch;
  /**
   * @remarks
   * The tags for the cloud application. You can select multiple tags. This action resets all existing tags for the cloud application.
   * 
   * 1. Valid values:
   *    hot, game, and app.
   * 
   * 2. Special case:
   *    To delete all tags, enter ["NULL"].
   */
  pkgLabels?: string[];
  /**
   * @remarks
   * The ID of the stable patch. This patch is used by default if you do not specify a PatchId when the application is in use, such as during a session startup. This parameter is not supported when PkgType is android.
   * Special value:
   * 
   * 1. If you set this parameter to origin, the patch version is removed and the initial version is used.
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

