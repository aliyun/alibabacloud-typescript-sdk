// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult extends $dara.Model {
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

export class CreateMcubeNebulaAppResponseBody extends $dara.Model {
  createNebulaAppResult?: CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createNebulaAppResult: 'CreateNebulaAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createNebulaAppResult: CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createNebulaAppResult && typeof (this.createNebulaAppResult as any).validate === 'function') {
      (this.createNebulaAppResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

