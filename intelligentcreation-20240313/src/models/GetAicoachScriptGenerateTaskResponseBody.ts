// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptGenerateTaskResponseBodyData extends $dara.Model {
  scriptRecordId?: string;
  status?: string;
  taskId?: string;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      scriptRecordId: 'scriptRecordId',
      status: 'status',
      taskId: 'taskId',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptRecordId: 'string',
      status: 'string',
      taskId: 'string',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptGenerateTaskResponseBody extends $dara.Model {
  data?: GetAICoachScriptGenerateTaskResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAICoachScriptGenerateTaskResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

