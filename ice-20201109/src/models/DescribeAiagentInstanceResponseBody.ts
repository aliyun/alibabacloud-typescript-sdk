// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAIAgentInstanceResponseBodyInstance } from "./DescribeAiagentInstanceResponseBodyInstance";


export class DescribeAIAgentInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AI agent.
   */
  instance?: DescribeAIAgentInstanceResponseBodyInstance;
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
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeAIAgentInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

