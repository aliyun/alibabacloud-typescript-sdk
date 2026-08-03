// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBody extends $dara.Model {
  agentId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

