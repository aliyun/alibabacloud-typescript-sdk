// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelConnectionsOutput } from "./ListModelConnectionsOutput";


export class ListModelConnectionsResult extends $dara.Model {
  /**
   * @remarks
   * Indicates the request status. A value of SUCCESS means the request was successful. For failed requests, this field contains the corresponding error type.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of model connections.
   * 
   * @example
   * {}
   */
  data?: ListModelConnectionsOutput;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
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
      data: ListModelConnectionsOutput,
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

