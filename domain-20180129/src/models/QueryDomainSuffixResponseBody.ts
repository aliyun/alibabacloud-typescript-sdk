// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainSuffixResponseBodySuffixList extends $dara.Model {
  suffix?: string[];
  static names(): { [key: string]: string } {
    return {
      suffix: 'Suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suffix: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.suffix)) {
      $dara.Model.validateArray(this.suffix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainSuffixResponseBody extends $dara.Model {
  /**
   * @example
   * D1C9DE44-1D7F-4F66-9653-00000
   */
  requestId?: string;
  suffixList?: QueryDomainSuffixResponseBodySuffixList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suffixList: 'SuffixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suffixList: QueryDomainSuffixResponseBodySuffixList,
    };
  }

  validate() {
    if(this.suffixList && typeof (this.suffixList as any).validate === 'function') {
      (this.suffixList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

