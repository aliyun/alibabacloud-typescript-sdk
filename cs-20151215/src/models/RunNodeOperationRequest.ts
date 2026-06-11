// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNodeOperationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * restart.kubelet
   */
  operationAction?: string;
  operationArgs?: string[];
  static names(): { [key: string]: string } {
    return {
      operationAction: 'operationAction',
      operationArgs: 'operationArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationAction: 'string',
      operationArgs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operationArgs)) {
      $dara.Model.validateArray(this.operationArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

