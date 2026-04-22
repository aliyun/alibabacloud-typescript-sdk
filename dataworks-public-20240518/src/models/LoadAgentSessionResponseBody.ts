// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadAgentSessionResponseBody extends $dara.Model {
  error?: any;
  /**
   * @example
   * 676303114031776
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
   * 0D41C608-0C60-5EB0-B986-1460909CF642
   */
  requestId?: string;
  result?: any;
  /**
   * @example
   * 1769479322828
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

