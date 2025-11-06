// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmTransferInEmailResponseBodyFailList extends $dara.Model {
  failDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      failDomain: 'FailDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failDomain)) {
      $dara.Model.validateArray(this.failDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBodySuccessList extends $dara.Model {
  successDomain?: string[];
  static names(): { [key: string]: string } {
    return {
      successDomain: 'SuccessDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDomain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.successDomain)) {
      $dara.Model.validateArray(this.successDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmTransferInEmailResponseBody extends $dara.Model {
  failList?: ConfirmTransferInEmailResponseBodyFailList;
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  successList?: ConfirmTransferInEmailResponseBodySuccessList;
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: ConfirmTransferInEmailResponseBodyFailList,
      requestId: 'string',
      successList: ConfirmTransferInEmailResponseBodySuccessList,
    };
  }

  validate() {
    if(this.failList && typeof (this.failList as any).validate === 'function') {
      (this.failList as any).validate();
    }
    if(this.successList && typeof (this.successList as any).validate === 'function') {
      (this.successList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

