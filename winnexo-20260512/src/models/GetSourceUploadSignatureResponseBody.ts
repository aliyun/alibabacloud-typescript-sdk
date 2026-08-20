// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceUploadSignatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The content type. Valid values: Text and Markdown.
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * The validity period of the task, in seconds.
   * 
   * @example
   * 1
   */
  expiresIn?: number;
  /**
   * @remarks
   * The publicly accessible URL of the DingTalk online document.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID. This parameter is optional and corresponds to settings.file_record_id.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The Yida attachment URL.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  fileUrl?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The method.
   * 
   * @example
   * string_value
   */
  method?: string;
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
   * The signed URL.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  uploadSignatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      contentType: 'contentType',
      expiresIn: 'expiresIn',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      fileUrl: 'fileUrl',
      message: 'message',
      method: 'method',
      objectName: 'objectName',
      requestId: 'requestId',
      uploadSignatureUrl: 'uploadSignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contentType: 'string',
      expiresIn: 'number',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      fileUrl: 'string',
      message: 'string',
      method: 'string',
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

