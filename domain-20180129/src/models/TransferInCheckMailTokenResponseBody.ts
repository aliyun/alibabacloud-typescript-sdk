// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferInCheckMailTokenResponseBodyFailList extends $dara.Model {
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

export class TransferInCheckMailTokenResponseBodySuccessList extends $dara.Model {
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

export class TransferInCheckMailTokenResponseBody extends $dara.Model {
  failList?: TransferInCheckMailTokenResponseBodyFailList;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  successList?: TransferInCheckMailTokenResponseBodySuccessList;
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: TransferInCheckMailTokenResponseBodyFailList,
      requestId: 'string',
      successList: TransferInCheckMailTokenResponseBodySuccessList,
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

