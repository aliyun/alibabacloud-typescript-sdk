// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInvocationRequest extends $dara.Model {
  /**
   * @remarks
   * The execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodeIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdList: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

