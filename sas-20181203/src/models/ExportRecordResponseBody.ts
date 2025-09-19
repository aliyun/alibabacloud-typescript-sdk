// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * cms_20171101.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the exported file.
   * 
   * @example
   * 131231
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
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

