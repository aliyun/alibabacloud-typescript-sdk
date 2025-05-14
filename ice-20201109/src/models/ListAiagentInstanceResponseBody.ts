// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAIAgentInstanceResponseBodyInstances } from "./ListAiagentInstanceResponseBodyInstances";


export class ListAIAgentInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the AI agents.
   */
  instances?: ListAIAgentInstanceResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListAIAgentInstanceResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

