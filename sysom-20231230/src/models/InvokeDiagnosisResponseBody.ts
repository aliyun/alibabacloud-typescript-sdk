// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Diagnostic task ID. You can use this ID to invoke the `GetDiagnosisResult` API to query the diagnosis result.
   * 
   * @example
   * ihqhAcrt
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failure. When authorization fails, check the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: InvokeDiagnosisResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 43A910E9-A739-525E-855D-A32C257F1826
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InvokeDiagnosisResponseBodyData,
      message: 'string',
      requestId: 'string',
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

