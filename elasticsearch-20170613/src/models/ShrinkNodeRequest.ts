// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShrinkNodeRequestBody } from "./ShrinkNodeRequestBody";


export class ShrinkNodeRequest extends $dara.Model {
  body?: ShrinkNodeRequestBody[];
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * false
   */
  ignoreStatus?: boolean;
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
      clientToken: 'clientToken',
      count: 'count',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ShrinkNodeRequestBody },
      clientToken: 'string',
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

