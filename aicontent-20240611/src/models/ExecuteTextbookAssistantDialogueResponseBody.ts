// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantDialogueResponseBodyData } from "./ExecuteTextbookAssistantDialogueResponseBodyData";


export class ExecuteTextbookAssistantDialogueResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantDialogueResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  success?: string;
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
      data: ExecuteTextbookAssistantDialogueResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
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

