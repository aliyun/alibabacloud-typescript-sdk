// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSemanticFileRequest extends $dara.Model {
  /**
   * @remarks
   * The MIME type of the object to upload. Maximum length: 128 characters. This value is included in the signature of UploadUrl. Use the same Content-Type when you perform the PUT request.
   * 
   * This parameter is required.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The original file name of the reference file to upload. Maximum length: 255 characters. When FileId is used for singleTableFile, only CSV or XLSX files are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * reference.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file to upload, in bytes. This value is recorded as attachment metadata. Specify the actual file size.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      fileName: 'FileName',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileName: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

