// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExchangeErrorByTaskIdResponseBodyDataVoListExchangeErrorDO extends $dara.Model {
  errorMessage?: number;
  exchangeName?: string;
  exchangeType?: string;
  taskId?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      exchangeName: 'ExchangeName',
      exchangeType: 'ExchangeType',
      taskId: 'TaskId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'number',
      exchangeName: 'string',
      exchangeType: 'string',
      taskId: 'number',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExchangeErrorByTaskIdResponseBodyDataVoList extends $dara.Model {
  exchangeErrorDO?: GetExchangeErrorByTaskIdResponseBodyDataVoListExchangeErrorDO[];
  static names(): { [key: string]: string } {
    return {
      exchangeErrorDO: 'ExchangeErrorDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeErrorDO: { 'type': 'array', 'itemType': GetExchangeErrorByTaskIdResponseBodyDataVoListExchangeErrorDO },
    };
  }

  validate() {
    if(Array.isArray(this.exchangeErrorDO)) {
      $dara.Model.validateArray(this.exchangeErrorDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExchangeErrorByTaskIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetExchangeErrorByTaskIdResponseBodyDataVoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voList: GetExchangeErrorByTaskIdResponseBodyDataVoList,
    };
  }

  validate() {
    if(this.voList && typeof (this.voList as any).validate === 'function') {
      (this.voList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExchangeErrorByTaskIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetExchangeErrorByTaskIdResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetExchangeErrorByTaskIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

