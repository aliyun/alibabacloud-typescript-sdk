// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult extends $dara.Model {
  errorCode?: string;
  nebulaResourceId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaResourceId: 'NebulaResourceId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaResourceId: 'string',
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

export class CreateMcubeNebulaResourceResponseBody extends $dara.Model {
  createMcubeNebulaResourceReslult?: CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMcubeNebulaResourceReslult: 'CreateMcubeNebulaResourceReslult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMcubeNebulaResourceReslult: CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createMcubeNebulaResourceReslult && typeof (this.createMcubeNebulaResourceReslult as any).validate === 'function') {
      (this.createMcubeNebulaResourceReslult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

