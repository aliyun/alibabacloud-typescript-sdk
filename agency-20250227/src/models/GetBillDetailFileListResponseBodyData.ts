// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetBillDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 202502
   */
  billMonth?: string;
  fileName?: string;
  /**
   * @example
   * aps.ailyun.com/file/download?resourceId=1234&type=1
   */
  fileUrl?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileName: 'string',
      fileUrl: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

