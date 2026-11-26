// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AICoachScriptHotWordItem } from "./AicoachScriptHotWordItem";


export class QueryScriptHotWordListResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  scriptHotWordList?: AICoachScriptHotWordItem[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      scriptHotWordList: 'scriptHotWordList',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      scriptHotWordList: { 'type': 'array', 'itemType': AICoachScriptHotWordItem },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scriptHotWordList)) {
      $dara.Model.validateArray(this.scriptHotWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

