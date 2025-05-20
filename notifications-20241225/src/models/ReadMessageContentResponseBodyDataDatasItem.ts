// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageContentResponseBodyDataDatasItem extends $dara.Model {
  categoryName?: string;
  classId?: number;
  content?: string;
  deleted?: number;
  gmtCreated?: number;
  gmtUpdate?: number;
  massId?: number;
  memo?: string;
  msgId?: number;
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      classId: 'ClassId',
      content: 'Content',
      deleted: 'Deleted',
      gmtCreated: 'GmtCreated',
      gmtUpdate: 'GmtUpdate',
      massId: 'MassId',
      memo: 'Memo',
      msgId: 'MsgId',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      classId: 'number',
      content: 'string',
      deleted: 'number',
      gmtCreated: 'number',
      gmtUpdate: 'number',
      massId: 'number',
      memo: 'string',
      msgId: 'number',
      status: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

