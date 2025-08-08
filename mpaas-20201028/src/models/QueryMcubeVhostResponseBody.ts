// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMcubeVhostResponseBodyQueryVhostResult extends $dara.Model {
  data?: string;
  resultMsg?: string;
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
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponseBody extends $dara.Model {
  queryVhostResult?: QueryMcubeVhostResponseBodyQueryVhostResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryVhostResult: 'QueryVhostResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryVhostResult: QueryMcubeVhostResponseBodyQueryVhostResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.queryVhostResult && typeof (this.queryVhostResult as any).validate === 'function') {
      (this.queryVhostResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

