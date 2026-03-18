// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateConversationRequest extends $dara.Model {
  /**
   * @example
   * {"stream":true,"messages":[{"role":"user","content":"1+1"}],"model":"qwen/qwen-max/r0","stream_options":{"include_usage":true}}
   */
  chatData?: string;
  /**
   * @example
   * 15
   */
  modelIds?: string;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chatData: 'chatData',
      modelIds: 'modelIds',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatData: 'string',
      modelIds: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

