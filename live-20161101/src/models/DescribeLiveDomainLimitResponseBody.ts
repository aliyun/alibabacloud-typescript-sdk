// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit extends $dara.Model {
  /**
   * @remarks
   * The current number of ingested streams.
   * 
   * @example
   * 10
   */
  currentNum?: number;
  /**
   * @remarks
   * The current number of transcoded streams.
   * 
   * @example
   * 10
   */
  currentTranscodeNum?: number;
  /**
   * @remarks
   * The current number of streams relayed from the live center.
   * 
   * @example
   * 10
   */
  currentTransferNum?: number;
  /**
   * @remarks
   * The name of the queried main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The maximum number of ingested streams.
   * 
   * @example
   * 100
   */
  limitNum?: number;
  /**
   * @remarks
   * The maximum number of transcoded streams.
   * 
   * @example
   * 50
   */
  limitTranscodeNum?: number;
  /**
   * @remarks
   * The maximum allowed number of streams relayed from the live center.
   * 
   * @example
   * 50
   */
  limitTransferNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentNum: 'CurrentNum',
      currentTranscodeNum: 'CurrentTranscodeNum',
      currentTransferNum: 'CurrentTransferNum',
      domainName: 'DomainName',
      limitNum: 'LimitNum',
      limitTranscodeNum: 'LimitTranscodeNum',
      limitTransferNum: 'LimitTransferNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentNum: 'number',
      currentTranscodeNum: 'number',
      currentTransferNum: 'number',
      domainName: 'string',
      limitNum: 'number',
      limitTranscodeNum: 'number',
      limitTransferNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseBodyLiveDomainLimitList extends $dara.Model {
  liveDomainLimit?: DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit[];
  static names(): { [key: string]: string } {
    return {
      liveDomainLimit: 'LiveDomainLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainLimit: { 'type': 'array', 'itemType': DescribeLiveDomainLimitResponseBodyLiveDomainLimitListLiveDomainLimit },
    };
  }

  validate() {
    if(Array.isArray(this.liveDomainLimit)) {
      $dara.Model.validateArray(this.liveDomainLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The limits.
   */
  liveDomainLimitList?: DescribeLiveDomainLimitResponseBodyLiveDomainLimitList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveDomainLimitList: 'LiveDomainLimitList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainLimitList: DescribeLiveDomainLimitResponseBodyLiveDomainLimitList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveDomainLimitList && typeof (this.liveDomainLimitList as any).validate === 'function') {
      (this.liveDomainLimitList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

