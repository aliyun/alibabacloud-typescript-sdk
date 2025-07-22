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

export class GetEndpointSwitchTaskResponseBody extends $dara.Model {
  code?: string;
  data?: GetEndpointSwitchTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEndpointSwitchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

