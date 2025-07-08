// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPushMsgResponseBodyModel extends $dara.Model {
  createdDate?: string;
  createdDateStr?: string;
  id?: string;
  pushTime?: string;
  pushTimeStr?: string;
  spec?: string;
  status?: string;
  statusStr?: string;
  title?: string;
  userNum?: number;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      createdDateStr: 'CreatedDateStr',
      id: 'Id',
      pushTime: 'PushTime',
      pushTimeStr: 'PushTimeStr',
      spec: 'Spec',
      status: 'Status',
      statusStr: 'StatusStr',
      title: 'Title',
      userNum: 'UserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      createdDateStr: 'string',
      id: 'string',
      pushTime: 'string',
      pushTimeStr: 'string',
      spec: 'string',
      status: 'string',
      statusStr: 'string',
      title: 'string',
      userNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

