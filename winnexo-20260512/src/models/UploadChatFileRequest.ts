// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the file. Valid values:
   * 
   * - **image**: Image.
   * - **document**: General document.
   * - **alidoc**: Alibaba document.
   * - **text**: Text.
   * - **video**: Video.
   * - **audio**: Audio.
   * - **archive**: Archive.
   * - **app**: Application.
   * - **link**: Shortcut.
   * - **other**: Other.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The full path name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The Yida attachment address.
   * 
   * This parameter is required.
   * 
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-08-06/9f8c2a1b
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name). This parameter is optional.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID that takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileName: 'string',
      fileUrl: 'string',
      operatingObjectName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

