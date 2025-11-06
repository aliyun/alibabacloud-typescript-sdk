// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeDownstreamBindingsResponseBodyDataVoListBindingVO extends $dara.Model {
  argument?: string;
  bindingKey?: string;
  bindingType?: number;
  dstName?: string;
  srcName?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      dstName: 'DstName',
      srcName: 'SrcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'number',
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

export class ListExchangeDownstreamBindingsResponseBodyDataVoList extends $dara.Model {
  bindingVO?: ListExchangeDownstreamBindingsResponseBodyDataVoListBindingVO[];
  static names(): { [key: string]: string } {
    return {
      bindingVO: 'BindingVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingVO: { 'type': 'array', 'itemType': ListExchangeDownstreamBindingsResponseBodyDataVoListBindingVO },
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

export class ListExchangeDownstreamBindingsResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  voList?: ListExchangeDownstreamBindingsResponseBodyDataVoList;
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
      voList: ListExchangeDownstreamBindingsResponseBodyDataVoList,
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

export class ListExchangeDownstreamBindingsResponseBody extends $dara.Model {
  code?: number;
  data?: ListExchangeDownstreamBindingsResponseBodyData;
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
      data: ListExchangeDownstreamBindingsResponseBodyData,
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

