// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadUrlRequest extends $dara.Model {
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
   * The validity period of the download URL. Maximum value: 115200. Default value: 900. Unit: seconds.
   * 
   * @example
   * 100
   */
  expireSec?: number;
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
   * The name of the file. The name can be up to 1,024 characters in length.
   * 
   * @example
   * 1.txt
   */
  fileName?: string;
  /**
   * @example
   * video/mp4
   */
  responseContentType?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a sharing link, carry the `x-share-token` header in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify at least either `share_id` or `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      expireSec: 'expire_sec',
      fileId: 'file_id',
      fileName: 'file_name',
      responseContentType: 'response_content_type',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      expireSec: 'number',
      fileId: 'string',
      fileName: 'string',
      responseContentType: 'string',
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

