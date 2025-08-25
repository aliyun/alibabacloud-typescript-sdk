// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcubeMiniAppResponseBodyDeleteMiniResult extends $dara.Model {
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

export class DeleteMcubeMiniAppResponseBody extends $dara.Model {
  deleteMiniResult?: DeleteMcubeMiniAppResponseBodyDeleteMiniResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMiniResult: 'DeleteMiniResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMiniResult: DeleteMcubeMiniAppResponseBodyDeleteMiniResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.deleteMiniResult && typeof (this.deleteMiniResult as any).validate === 'function') {
      (this.deleteMiniResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

