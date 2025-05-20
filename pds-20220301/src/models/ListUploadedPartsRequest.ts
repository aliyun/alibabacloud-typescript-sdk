// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadedPartsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID. This parameter is required if the file is not uploaded by using the share URL of the file.
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
   * 322fb07b975f4b0ae1b543fe8475eee4c19eb2b2
   */
  fileId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  partNumberMarker?: number;
  /**
   * @remarks
   * The share ID. This parameter is required if the file is uploaded by using the share URL of the file.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 00166D06127B413BA1EC8ABB1144D101
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      limit: 'limit',
      partNumberMarker: 'part_number_marker',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      limit: 'number',
      partNumberMarker: 'number',
      shareId: 'string',
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

