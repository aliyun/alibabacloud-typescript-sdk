// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecreaseNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Operation ID.
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44430037-E59A-3E66-A2B0-97D155346F22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
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

