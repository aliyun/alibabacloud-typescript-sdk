// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnalysisCoreIndexResponseBodyResultContentData extends $dara.Model {
  /**
   * @example
   * 0
   */
  arrivalNum?: string;
  /**
   * @example
   * 0
   */
  arrivalRate?: string;
  /**
   * @example
   * 0
   */
  ignoreNum?: string;
  /**
   * @example
   * 0
   */
  ignoreRate?: string;
  /**
   * @example
   * 0
   */
  openNum?: string;
  /**
   * @example
   * 0
   */
  openRate?: string;
  /**
   * @example
   * 0
   */
  pushNum?: string;
  /**
   * @example
   * 0
   */
  pushTotalNum?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalNum: 'ArrivalNum',
      arrivalRate: 'ArrivalRate',
      ignoreNum: 'IgnoreNum',
      ignoreRate: 'IgnoreRate',
      openNum: 'OpenNum',
      openRate: 'OpenRate',
      pushNum: 'PushNum',
      pushTotalNum: 'PushTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalNum: 'string',
      arrivalRate: 'string',
      ignoreNum: 'string',
      ignoreRate: 'string',
      openNum: 'string',
      openRate: 'string',
      pushNum: 'string',
      pushTotalNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisCoreIndexResponseBodyResultContent extends $dara.Model {
  data?: ListAnalysisCoreIndexResponseBodyResultContentData;
  /**
   * @example
   * “”
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAnalysisCoreIndexResponseBodyResultContentData,
      resultMsg: 'string',
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

export class ListAnalysisCoreIndexResponseBody extends $dara.Model {
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  resultContent?: ListAnalysisCoreIndexResponseBodyResultContent;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ListAnalysisCoreIndexResponseBodyResultContent,
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

