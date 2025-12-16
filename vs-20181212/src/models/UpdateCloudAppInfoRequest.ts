// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoRequestPatch extends $dara.Model {
  asStablePatch?: boolean;
  /**
   * @example
   * https://test_host/app/test-tar-pkg.tar
   */
  downloadURL?: string;
  /**
   * @example
   * 346f6404395adfg5bae1e45g4e943bf7
   */
  md5?: string;
  /**
   * @example
   * p1
   */
  patchName?: string;
  /**
   * @example
   * tar
   */
  pkgFormat?: string;
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
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  description?: string;
  patch?: UpdateCloudAppInfoRequestPatch;
  pkgLabels?: string[];
  /**
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

