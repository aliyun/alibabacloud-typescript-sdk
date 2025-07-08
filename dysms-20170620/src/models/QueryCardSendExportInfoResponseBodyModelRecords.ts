// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSendExportInfoResponseBodyModelRecords extends $dara.Model {
  ext?: string;
  fileName?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  ossUrl?: string;
  pid?: number;
  status?: number;
  type?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ossUrl: 'OssUrl',
      pid: 'Pid',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      fileName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      ossUrl: 'string',
      pid: 'number',
      status: 'number',
      type: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

