// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushAnalysisCoreIndexResponseBodyResultContentData extends $dara.Model {
  arrivalNum?: number;
  arrivalRate?: number;
  ignoreNum?: number;
  ignoreRate?: number;
  openNum?: number;
  openRate?: number;
  pushNum?: number;
  pushTotalNum?: number;
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
      arrivalNum: 'number',
      arrivalRate: 'number',
      ignoreNum: 'number',
      ignoreRate: 'number',
      openNum: 'number',
      openRate: 'number',
      pushNum: 'number',
      pushTotalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexResponseBodyResultContent extends $dara.Model {
  data?: QueryPushAnalysisCoreIndexResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPushAnalysisCoreIndexResponseBodyResultContentData,
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

export class QueryPushAnalysisCoreIndexResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisCoreIndexResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushAnalysisCoreIndexResponseBodyResultContent,
      resultMessage: 'string',
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

