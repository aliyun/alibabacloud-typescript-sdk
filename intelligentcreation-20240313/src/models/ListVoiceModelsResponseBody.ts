// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VoiceModelResponse } from "./VoiceModelResponse";


export class ListVoiceModelsResponseBody extends $dara.Model {
  code?: string;
  errorCode?: string;
  errorMessage?: string;
  list?: VoiceModelResponse[];
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': VoiceModelResponse },
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

