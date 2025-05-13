// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateShrinkNodesRequestBody } from "./ValidateShrinkNodesRequestBody";


export class ValidateShrinkNodesRequest extends $dara.Model {
  body?: ValidateShrinkNodesRequestBody[];
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * false
   */
  ignoreStatus?: boolean;
  /**
   * @remarks
   * Returned results:
   * 
   * *   true: can be scaled in
   * *   false: cannot be scaled in.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      count: 'count',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ValidateShrinkNodesRequestBody },
      count: 'number',
      ignoreStatus: 'boolean',
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

