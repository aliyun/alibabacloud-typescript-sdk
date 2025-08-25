// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult extends $dara.Model {
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

export class ChangeMcubeMiniTaskStatusResponseBody extends $dara.Model {
  changeMiniTaskStatusResult?: ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      changeMiniTaskStatusResult: 'ChangeMiniTaskStatusResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeMiniTaskStatusResult: ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.changeMiniTaskStatusResult && typeof (this.changeMiniTaskStatusResult as any).validate === 'function') {
      (this.changeMiniTaskStatusResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

