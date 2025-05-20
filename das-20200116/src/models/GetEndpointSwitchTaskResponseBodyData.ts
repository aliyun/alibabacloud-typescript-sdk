// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEndpointSwitchTaskResponseBodyData extends $dara.Model {
  accountId?: string;
  dbLinkId?: number;
  errMsg?: string;
  oriUuid?: string;
  status?: string;
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dbLinkId: 'DbLinkId',
      errMsg: 'ErrMsg',
      oriUuid: 'OriUuid',
      status: 'Status',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbLinkId: 'number',
      errMsg: 'string',
      oriUuid: 'string',
      status: 'string',
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

