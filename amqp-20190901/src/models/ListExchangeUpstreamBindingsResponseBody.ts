// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeUpstreamBindingsResponseBodyDataVoListBindingVO extends $dara.Model {
  argument?: string;
  bindType?: number;
  bindingKey?: string;
  dstName?: string;
  srcName?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindType: 'BindType',
      bindingKey: 'BindingKey',
      dstName: 'DstName',
      srcName: 'SrcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindType: 'number',
      bindingKey: 'string',
      dstName: 'string',
      srcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpstreamBindingsResponseBodyDataVoList extends $dara.Model {
  bindingVO?: ListExchangeUpstreamBindingsResponseBodyDataVoListBindingVO[];
  static names(): { [key: string]: string } {
    return {
      bindingVO: 'BindingVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingVO: { 'type': 'array', 'itemType': ListExchangeUpstreamBindingsResponseBodyDataVoListBindingVO },
    };
  }

  validate() {
    if(Array.isArray(this.bindingVO)) {
      $dara.Model.validateArray(this.bindingVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpstreamBindingsResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  voList?: ListExchangeUpstreamBindingsResponseBodyDataVoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      voList: ListExchangeUpstreamBindingsResponseBodyDataVoList,
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

export class ListExchangeUpstreamBindingsResponseBody extends $dara.Model {
  code?: number;
  data?: ListExchangeUpstreamBindingsResponseBodyData;
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
      data: ListExchangeUpstreamBindingsResponseBodyData,
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

