// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to restart in fast mode. Default value: false.
   * 
   * - true: Restart compute nodes in fast mode. Nodes restart in batches. Within each batch, nodes restart in parallel. Between batches, restarts run sequentially.
   * 
   * - false: Restart compute nodes using rolling restart.
   * 
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the compute group.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      instanceId: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

