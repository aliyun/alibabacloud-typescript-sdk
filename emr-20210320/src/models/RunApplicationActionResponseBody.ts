// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunApplicationActionResponseBodyAbnInstances } from "./RunApplicationActionResponseBodyAbnInstances";


export class RunApplicationActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The abnormal nodes.
   */
  abnInstances?: RunApplicationActionResponseBodyAbnInstances[];
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnInstances: 'AbnInstances',
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnInstances: { 'type': 'array', 'itemType': RunApplicationActionResponseBodyAbnInstances },
      operationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnInstances)) {
      $dara.Model.validateArray(this.abnInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

