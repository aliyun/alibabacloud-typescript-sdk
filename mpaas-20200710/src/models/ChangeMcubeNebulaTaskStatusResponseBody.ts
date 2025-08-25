// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult extends $dara.Model {
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

export class ChangeMcubeNebulaTaskStatusResponseBody extends $dara.Model {
  changeMcubeNebulaTaskStatusResult?: ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      changeMcubeNebulaTaskStatusResult: 'ChangeMcubeNebulaTaskStatusResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeMcubeNebulaTaskStatusResult: ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.changeMcubeNebulaTaskStatusResult && typeof (this.changeMcubeNebulaTaskStatusResult as any).validate === 'function') {
      (this.changeMcubeNebulaTaskStatusResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

