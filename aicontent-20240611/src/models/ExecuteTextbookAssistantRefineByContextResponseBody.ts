// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantRefineByContextResponseBodyData } from "./ExecuteTextbookAssistantRefineByContextResponseBodyData";


export class ExecuteTextbookAssistantRefineByContextResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantRefineByContextResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6F73C114-A76E-51AD-99E3-BC7B941B69E0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteTextbookAssistantRefineByContextResponseBodyData,
      errCode: 'string',
      errMessage: 'number',
      httpStatusCode: 'string',
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

