// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplatesOutput } from "./ListTemplatesOutput";


export class ListTemplatesResult extends $dara.Model {
  /**
   * @remarks
   * A value of `SUCCESS` indicates the request was successful. On failure, this parameter returns an error type, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Details about the template list.
   */
  data?: ListTemplatesOutput;
  /**
   * @remarks
   * A unique request ID for troubleshooting and tracking.
   * 
   * @example
   * C0595DB0-D1EE-55C3-8DDD-790872C7EC2F
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
      data: ListTemplatesOutput,
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

