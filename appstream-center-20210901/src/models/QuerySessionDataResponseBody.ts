// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionDataResponseBodyIndexData extends $dara.Model {
  /**
   * @example
   * 10
   */
  hh?: string;
  /**
   * @example
   * 30
   */
  mi?: string;
  /**
   * @example
   * 128
   */
  sessionCntMi?: number;
  /**
   * @example
   * 20261106
   */
  statDate?: string;
  static names(): { [key: string]: string } {
    return {
      hh: 'Hh',
      mi: 'Mi',
      sessionCntMi: 'SessionCntMi',
      statDate: 'StatDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hh: 'string',
      mi: 'string',
      sessionCntMi: 'number',
      statDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionDataResponseBody extends $dara.Model {
  /**
   * @example
   * NO_DATA
   */
  code?: string;
  indexData?: QuerySessionDataResponseBodyIndexData[];
  /**
   * @example
   * The parameter DateFormat is invalid.
   */
  message?: string;
  /**
   * @example
   * D4A13D91-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexData: 'IndexData',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexData: { 'type': 'array', 'itemType': QuerySessionDataResponseBodyIndexData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexData)) {
      $dara.Model.validateArray(this.indexData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

