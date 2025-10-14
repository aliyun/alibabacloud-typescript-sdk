// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildAICoachScriptRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234567
   */
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
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * Deduct task already success,Please do not resubmit.token \\"369e8f2c-d283-424a-96c4-c83efe08c89e\\"
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
   */
  requestId?: string;
  scriptRecordId?: string;
  /**
   * @example
   * True
   */
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

