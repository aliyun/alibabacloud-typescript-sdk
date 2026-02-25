// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodesRequestRestartNodeGroups extends $dara.Model {
  /**
   * @example
   * false
   */
  fastMode?: boolean;
  /**
   * @example
   * ng-dcc7450e06a271b9
   */
  nodeGroupId?: string;
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      nodeGroupId: 'NodeGroupId',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      nodeGroupId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartNodesRequest extends $dara.Model {
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  restartNodeGroups?: RestartNodesRequestRestartNodeGroups[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      restartNodeGroups: 'RestartNodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      restartNodeGroups: { 'type': 'array', 'itemType': RestartNodesRequestRestartNodeGroups },
    };
  }

  validate() {
    if(Array.isArray(this.restartNodeGroups)) {
      $dara.Model.validateArray(this.restartNodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

