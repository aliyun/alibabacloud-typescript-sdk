// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency for force restart. This parameter does not need to be set during a blue-green restart because force restart is not supported in that scenario.
   * 
   * @example
   * 20%
   */
  batchCount?: number;
  /**
   * @remarks
   * Specifies whether to perform a blue-green restart. Default value: false.
   * 
   * @example
   * false
   */
  blueGreenDep?: boolean;
  /**
   * @remarks
   * The type of role node to restart. This parameter is not supported.
   */
  nodeTypes?: string[];
  /**
   * @remarks
   * The node information selected when restarting nodes.
   */
  nodes?: string[];
  /**
   * @remarks
   * The restart type. Valid values:
   * 
   * - instance: restart the instance
   * - nodeIp: restart a node.
   * 
   * @example
   * instance
   */
  restartType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to force restart the instance. Valid values:
   * 
   * - true: force restart
   * - false (default): do not force restart.
   * 
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'batchCount',
      blueGreenDep: 'blueGreenDep',
      nodeTypes: 'nodeTypes',
      nodes: 'nodes',
      restartType: 'restartType',
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      blueGreenDep: 'boolean',
      nodeTypes: { 'type': 'array', 'itemType': 'string' },
      nodes: { 'type': 'array', 'itemType': 'string' },
      restartType: 'string',
      clientToken: 'string',
      force: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeTypes)) {
      $dara.Model.validateArray(this.nodeTypes);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

