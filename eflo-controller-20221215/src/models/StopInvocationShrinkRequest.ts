// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInvocationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-hz044748dzepds0
   */
  invokeId?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeIdListShrink: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

