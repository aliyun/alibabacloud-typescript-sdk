// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCommissionDetailFileListResponseBodyDataFileList } from "./GetCommissionDetailFileListResponseBodyDataFileList";


export class GetCommissionDetailFileListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 202502
   */
  billMonth?: string;
  fileList?: GetCommissionDetailFileListResponseBodyDataFileList[];
  /**
   * @example
   * 1112332432
   */
  partnerUid?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      fileList: 'FileList',
      partnerUid: 'PartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      fileList: { 'type': 'array', 'itemType': GetCommissionDetailFileListResponseBodyDataFileList },
      partnerUid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

