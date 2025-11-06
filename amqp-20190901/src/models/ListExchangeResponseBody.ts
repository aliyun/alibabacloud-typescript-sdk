// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeResponseBodyDataVoListExchangVO extends $dara.Model {
  attributes?: string;
  autoDelete?: boolean;
  canDelete?: boolean;
  createTime?: number;
  exchangeType?: number;
  internal?: boolean;
  name?: string;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDelete: 'AutoDelete',
      canDelete: 'CanDelete',
      createTime: 'CreateTime',
      exchangeType: 'ExchangeType',
      internal: 'Internal',
      name: 'Name',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      autoDelete: 'boolean',
      canDelete: 'boolean',
      createTime: 'number',
      exchangeType: 'number',
      internal: 'boolean',
      name: 'string',
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

export class ListExchangeResponseBodyDataVoList extends $dara.Model {
  exchangVO?: ListExchangeResponseBodyDataVoListExchangVO[];
  static names(): { [key: string]: string } {
    return {
      exchangVO: 'ExchangVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangVO: { 'type': 'array', 'itemType': ListExchangeResponseBodyDataVoListExchangVO },
    };
  }

  validate() {
    if(Array.isArray(this.exchangVO)) {
      $dara.Model.validateArray(this.exchangVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: ListExchangeResponseBodyDataVoList;
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
      voList: ListExchangeResponseBodyDataVoList,
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

export class ListExchangeResponseBody extends $dara.Model {
  code?: number;
  data?: ListExchangeResponseBodyData;
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
      data: ListExchangeResponseBodyData,
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

