// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteFileRequest extends $dara.Model {
  crc64Hash?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The upload ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C9DCFE5A82644AC7A02DB74C30C934A6
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      crc64Hash: 'crc64_hash',
      driveId: 'drive_id',
      fileId: 'file_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crc64Hash: 'string',
      driveId: 'string',
      fileId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

