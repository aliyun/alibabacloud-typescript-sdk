// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentRuntimeEndpointsOutput } from "./ListAgentRuntimeEndpointsOutput";


export class ListAgentRuntimeEndpointsResult extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. `SUCCESS` indicates that the operation succeeded. If the operation fails, an error code is returned, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Detailed information about the agent runtime endpoints.
   * 
   * @example
   * {}
   */
  data?: ListAgentRuntimeEndpointsOutput;
  /**
   * @remarks
   * A unique request identifier for troubleshooting purposes.
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
      data: ListAgentRuntimeEndpointsOutput,
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

