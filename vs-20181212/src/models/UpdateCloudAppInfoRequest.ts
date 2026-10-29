// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoRequestPatch extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically configure the patch as the stable patch after a successful upload. Default value: false.
   * 
   * @example
   * false
   */
  asStablePatch?: boolean;
  /**
   * @remarks
   * The download URL of the patch package. By default, the format of the patch package is the same as that of the original cloud application package. You must specify either RenderingInstanceId or DownloadURL. DownloadURL takes precedence.
   * 
   * @example
   * https://test_host/app/test-tar-pkg.tar
   */
  downloadURL?: string;
  /**
   * @remarks
   * The MD5 hash of the patch package, which is used to verify integrity. This parameter is valid and required only when DownloadURL is not empty.
   * 
   * @example
   * 346f6404395adfg5bae1e45g4e943bf7
   */
  md5?: string;
  /**
   * @remarks
   * The name or description of the patch package, which is one of the unique identifiers under the AppId. Naming conventions: 1. The value cannot be origin or all. 2. The length must be 1 to 50 characters. 3. The value can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.). 4. The first and last characters must be letters or digits.
   * 
   * @example
   * p1
   */
  patchName?: string;
  /**
   * @remarks
   * The format of the installation package. By default, the format is the same as the suffix of the download file URL. This parameter is valid only when DownloadURL is not empty. Valid values:
   * - tar.gz
   * - tar
   * - zip
   * - rar
   * 
   * @example
   * tar
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The relative path of the post-command within the application package. This parameter is supported only for Windows applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for executing the post-command, in seconds. This parameter is supported only for Windows applications.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  /**
   * @remarks
   * The instance ID used to create the patch package. This parameter is valid only for Android application marketplace scenarios where PkgType is set to andrpid_appmarket. You must specify either RenderingInstanceId or DownloadURL. DownloadURL takes precedence.
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
   * Used for testing
   */
  description?: string;
  /**
   * @remarks
   * The information about the patch package to be uploaded. 1. This parameter is not supported when PkgType is set to android. 2. Only one patch package can be in the uploading state (non-final state) for the same AppId at a time.
   */
  patch?: UpdateCloudAppInfoRequestPatch;
  /**
   * @remarks
   * The tags of the cloud application. You can specify multiple tags to reset the cloud application tags. Valid values:
   * - hot
   * - game
   * - app
   * To delete all tags, set the value to ["NULL"].
   */
  pkgLabels?: string[];
  /**
   * @remarks
   * The ID of the stable patch. This is the default patch ID used in customer business scenarios, such as session startup, when no patch ID is specified. This parameter is not supported when PkgType is set to android. Special value: origin: cancels the patch version and uses the initial version by default.
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

