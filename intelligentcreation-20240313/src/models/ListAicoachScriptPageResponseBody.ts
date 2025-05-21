// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyList } from "./ListAicoachScriptPageResponseBodyList";


export class ListAICoachScriptPageResponseBody extends $dara.Model {
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  errorMessage?: string;
  list?: ListAICoachScriptPageResponseBodyList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

