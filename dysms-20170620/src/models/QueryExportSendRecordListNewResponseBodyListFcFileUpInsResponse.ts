// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExportSendRecordListNewResponseBodyListFcFileUpInsResponse extends $dara.Model {
  fileFeature?: string;
  fileUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  handlerStatus?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      fileFeature: 'FileFeature',
      fileUrl: 'FileUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      handlerStatus: 'HandlerStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFeature: 'string',
      fileUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      handlerStatus: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

