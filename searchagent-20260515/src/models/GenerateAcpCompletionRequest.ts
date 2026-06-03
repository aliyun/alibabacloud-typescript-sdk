// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAcpCompletionRequest extends $dara.Model {
  agentName?: string;
  id?: string;
  jsonrpc?: string;
  method?: string;
  params?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      id: 'id',
      jsonrpc: 'jsonrpc',
      method: 'method',
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      id: 'string',
      jsonrpc: 'string',
      method: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

