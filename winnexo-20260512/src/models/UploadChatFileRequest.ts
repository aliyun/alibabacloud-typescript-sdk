// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileRequest extends $dara.Model {
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
   * The attachment address.
   * 
   * This parameter is required.
   * 
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-08-06/9f8c2a1b
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID.
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

