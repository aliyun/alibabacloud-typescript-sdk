// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoRequestPatch extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      downloadURL: 'DownloadURL',
      md5: 'Md5',
      patchName: 'PatchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadURL: 'string',
      md5: 'string',
      patchName: 'string',
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
      stablePatchId: 'StablePatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      patch: UpdateCloudAppInfoRequestPatch,
      stablePatchId: 'string',
    };
  }

  validate() {
    if(this.patch && typeof (this.patch as any).validate === 'function') {
      (this.patch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

