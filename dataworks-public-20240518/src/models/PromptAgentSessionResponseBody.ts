// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionResponseBody extends $dara.Model {
  error?: any;
  /**
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  method?: string;
  params?: any;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5D70885-7CC7-594A-80C7-2EF1B00FFB4B
   */
  requestId?: string;
  /**
   * @example
   * end_turn
   */
  result?: any;
  /**
   * @example
   * 1747447032
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      method: 'Method',
      params: 'Params',
      requestId: 'RequestId',
      result: 'Result',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'any',
      id: 'string',
      jsonrpc: 'string',
      method: 'string',
      params: 'any',
      requestId: 'string',
      result: 'any',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

