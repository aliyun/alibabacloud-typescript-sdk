// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadPartInfo } from "./UploadPartInfo";


export class GetUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the upload task was created.
   * 
   * @example
   * 2019-09-11T16:34:36.977Z
   */
  createAt?: string;
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
   * The file ID.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  partInfoList?: UploadPartInfo[];
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * 10166D06127B413BA1EC8ABB1144D111
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'create_at',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
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

