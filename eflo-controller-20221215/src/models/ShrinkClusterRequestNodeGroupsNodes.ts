// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01poc-cn-zmb2ypjdc01
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

