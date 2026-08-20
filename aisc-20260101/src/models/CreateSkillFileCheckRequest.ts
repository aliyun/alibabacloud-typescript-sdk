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
   * The file name. If not specified, the file name is parsed from DownloadUrl.
   * 
   * @example
   * test-file
   */
  fileName?: string;
  /**
   * @remarks
   * The tenant-isolated OSS temporary object key returned by GenerateSkillOssUploadCredential. Specify either this parameter or DownloadUrl.
   * 
   * @example
   * user-upload/staging/123456789/550e8400-e29b-41d4-a716-446655440000
   */
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      fileName: 'FileName',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileName: 'string',
      uploadKey: 'string',
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
  /**
   * @remarks
   * The upload source. If left empty, the default value is user_upload. Use sec_ops_agent for the security operations agent.
   * 
   * @example
   * sec_ops_agent
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': CreateSkillFileCheckRequestFiles },
      source: 'string',
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

