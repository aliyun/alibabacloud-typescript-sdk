// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentRuntimesOutput } from "./ListAgentRuntimesOutput";


export class ListAgentRuntimesResult extends $dara.Model {
  /**
   * @remarks
   * The status of the request. A value of `SUCCESS` indicates success. Otherwise, this field returns an error type, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of agent runtimes.
   * 
   * @example
   * {}
   */
  data?: ListAgentRuntimesOutput;
  /**
   * @remarks
   * The unique ID of the request, used for troubleshooting.
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
      data: ListAgentRuntimesOutput,
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

