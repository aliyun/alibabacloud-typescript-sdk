// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantSuggestionResponseBodyData } from "./ExecuteTextbookAssistantSuggestionResponseBodyData";


export class ExecuteTextbookAssistantSuggestionResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantSuggestionResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpstatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0D7D382F-9475-572E-BE83-DDFBF5C5EB24
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
      httpstatusCode: 'httpstatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteTextbookAssistantSuggestionResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpstatusCode: 'number',
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

