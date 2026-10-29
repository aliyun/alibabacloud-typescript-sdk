// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image export status. Valid values:
   * - Exporting: The image is being exported.
   * - Exported: The image is exported.
   * - ExportError: An error occurred during the image export.
   * - Unexported: The image is not exported.
   * 
   * @example
   * Exporting
   */
  imageExportStatus?: string;
  /**
   * @remarks
   * The request ID.
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

