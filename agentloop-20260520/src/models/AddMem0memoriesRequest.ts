// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMem0MemoriesRequest extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * {"messages":[{"role":"user","content":"我喜欢喝拿铁"}],"user_id":"alice","metadata":{"channel":"app"}}
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

