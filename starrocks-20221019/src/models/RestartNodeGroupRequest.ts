// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodeGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  fastMode?: boolean;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
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

