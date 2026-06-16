// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentRuntime } from "./AgentRuntime";


export class AgentRuntimeResult extends $dara.Model {
  /**
   * @remarks
   * Returns `SUCCESS` if the operation is successful; otherwise, returns an error code such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Detailed information about the agent runtime.
   * 
   * @example
   * {}
   */
  data?: AgentRuntime;
  /**
   * @remarks
   * A unique request ID for issue tracking.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AgentRuntime,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

