// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadPartInfo } from "./UploadPartInfo";


export class CreateFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Indicates whether the file exists.
   * 
   * @example
   * false
   */
  exist?: boolean;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * fileid1
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * a.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the parent directory.
   * 
   * @example
   * fileid5
   */
  parentFileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  partInfoList?: UploadPartInfo[];
  /**
   * @remarks
   * Indicates whether the file is instantly uploaded.
   * 
   * @example
   * true
   */
  rapidUpload?: boolean;
  /**
   * @remarks
   * The state of the file.
   * 
   * @example
   * uploading
   */
  status?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * uploadid1
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      exist: 'exist',
      fileId: 'file_id',
      fileName: 'file_name',
      parentFileId: 'parent_file_id',
      partInfoList: 'part_info_list',
      rapidUpload: 'rapid_upload',
      status: 'status',
      type: 'type',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      exist: 'boolean',
      fileId: 'string',
      fileName: 'string',
      parentFileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      rapidUpload: 'boolean',
      status: 'string',
      type: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

