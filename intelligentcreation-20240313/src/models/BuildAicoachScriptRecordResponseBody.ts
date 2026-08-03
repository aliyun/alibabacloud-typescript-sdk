// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildAICoachScriptRecordResponseBodyData extends $dara.Model {
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'scriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildAICoachScriptRecordResponseBody extends $dara.Model {
  data?: BuildAICoachScriptRecordResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  scriptRecordId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      scriptRecordId: 'scriptRecordId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BuildAICoachScriptRecordResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      scriptRecordId: 'string',
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

