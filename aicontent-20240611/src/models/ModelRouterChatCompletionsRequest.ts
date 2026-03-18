// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterChatCompletionsRequest extends $dara.Model {
  /**
   * @example
   * {
   *     "stream": true,
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "1+1"
   *       }
   *     ],
   *     "model_id": 15,
   *     "stream_options": {
   *       "include_usage": true
   *     }
   *   }
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

