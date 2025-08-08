// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
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

export class DeleteMcubeNebulaAppResponseBody extends $dara.Model {
  deleteMcubeNebulaAppResult?: DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMcubeNebulaAppResult: 'DeleteMcubeNebulaAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMcubeNebulaAppResult: DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.deleteMcubeNebulaAppResult && typeof (this.deleteMcubeNebulaAppResult as any).validate === 'function') {
      (this.deleteMcubeNebulaAppResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

