// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateTransferableNodesRequestBody } from "./ValidateTransferableNodesRequestBody";


export class ValidateTransferableNodesRequest extends $dara.Model {
  body?: ValidateTransferableNodesRequestBody[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ValidateTransferableNodesRequestBody },
      nodeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

