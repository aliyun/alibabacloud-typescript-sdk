// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentRuntimeVersionsOutput } from "./ListAgentRuntimeVersionsOutput";


export class ListAgentRuntimeVersionsResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request succeeded. A value of `SUCCESS` is returned on success. Otherwise, an error type is returned, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Contains the list of agent runtime versions.
   * 
   * @example
   * {}
   */
  data?: ListAgentRuntimeVersionsOutput;
  /**
   * @remarks
   * A unique request ID for troubleshooting.
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
      data: ListAgentRuntimeVersionsOutput,
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

