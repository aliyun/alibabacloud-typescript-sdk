// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class A2aRequest extends $dara.Model {
  /**
   * @example
   * a2a
   */
  env?: string;
  /**
   * @example
   * 791
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @example
   * message/stream
   */
  method?: string;
  /**
   * @example
   * {
   *     "message": {
   *       "role": "user",
   *       "parts": [
   *         {
   *           "kind": "text",
   *           "text": "你好“
   *         }
   *       ]
   *       "kind": "message"
   *     }
   *   }
   */
  params?: any;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      id: 'id',
      jsonrpc: 'jsonrpc',
      method: 'method',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      id: 'string',
      jsonrpc: 'string',
      method: 'string',
      params: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

