// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeNumberPreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The warehouse ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The number of nodes to which you want to change to.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeGroupId: 'string',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

