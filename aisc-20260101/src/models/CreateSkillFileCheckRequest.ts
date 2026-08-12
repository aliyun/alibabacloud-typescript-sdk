// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateSkillFileCheckRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The public URL for downloading the file. The downloaded file must be a compressed package in tar.gz or zip format.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name. If this parameter is not specified, the file name is parsed from DownloadUrl.
   * 
   * @example
   * test-file
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillFileCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The file information.
   */
  files?: CreateSkillFileCheckRequestFiles[];
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': CreateSkillFileCheckRequestFiles },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

