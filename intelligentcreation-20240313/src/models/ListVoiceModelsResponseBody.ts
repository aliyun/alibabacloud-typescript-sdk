// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VoiceModelResponse } from "./VoiceModelResponse";


export class ListVoiceModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: VoiceModelResponse[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
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

