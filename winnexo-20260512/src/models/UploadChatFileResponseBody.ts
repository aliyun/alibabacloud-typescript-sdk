// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The content type of the file. Valid values:
   * 
   * - **image**: image
   * - **document**: general document
   * - **alidoc**: Alibaba document
   * - **text**: text
   * - **video**: video
   * - **audio**: audio
   * - **archive**: archive
   * - **app**: application
   * - **link**: shortcut
   * - **other**: other
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * The full path name of the file.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the online document.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID (optional, corresponding to settings.file_record_id).
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The attachment address.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  fileUrl?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * string_value
   */
  objectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The signature URL.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  uploadSignatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      contentType: 'contentType',
      fileName: 'fileName',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      fileUrl: 'fileUrl',
      message: 'message',
      objectName: 'objectName',
      requestId: 'requestId',
      uploadSignatureUrl: 'uploadSignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentType: 'string',
      fileName: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      fileUrl: 'string',
      message: 'string',
      objectName: 'string',
      requestId: 'string',
      uploadSignatureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

