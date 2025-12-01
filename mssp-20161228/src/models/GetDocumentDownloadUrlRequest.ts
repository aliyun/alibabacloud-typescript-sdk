// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentDownloadUrlRequest extends $dara.Model {
  fileKey?: string;
  /**
   * @remarks
   * Document management ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 175815
   */
  id?: number;
  /**
   * @remarks
   * Report type.
   * 
   * @example
   * 5
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      id: 'Id',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      id: 'number',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

