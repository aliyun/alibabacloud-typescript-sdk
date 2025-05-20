// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadPartInfo } from "./UploadPartInfo";


export class ListUploadedPartsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 322fb07b975f4b0ae1b543fe8475eee4c19eb2b2
   */
  fileId?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextPartNumberMarker?: string;
  /**
   * @remarks
   * Indicates whether the parallel upload feature is enabled.
   * 
   * @example
   * false
   */
  parallelUpload?: boolean;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * 00166D06127B413BA1EC8ABB1144D101
   */
  uploadId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  uploadedParts?: UploadPartInfo[];
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      nextPartNumberMarker: 'next_part_number_marker',
      parallelUpload: 'parallel_upload',
      uploadId: 'upload_id',
      uploadedParts: 'uploaded_parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      nextPartNumberMarker: 'string',
      parallelUpload: 'boolean',
      uploadId: 'string',
      uploadedParts: { 'type': 'array', 'itemType': UploadPartInfo },
    };
  }

  validate() {
    if(Array.isArray(this.uploadedParts)) {
      $dara.Model.validateArray(this.uploadedParts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

