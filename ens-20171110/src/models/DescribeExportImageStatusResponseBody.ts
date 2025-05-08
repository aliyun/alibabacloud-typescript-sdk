// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The export status of the image. Valid values:
   * 
   * *   Exporting
   * *   Exported
   * *   ExportError
   * *   Unexported
   * 
   * @example
   * Exporting
   */
  imageExportStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14BBB3A0-3DBE-54F5-AEC8-01D3F6B1EBE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageExportStatus: 'ImageExportStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageExportStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

