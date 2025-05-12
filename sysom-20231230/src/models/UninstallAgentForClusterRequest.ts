// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAgentForClusterRequest extends $dara.Model {
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @example
   * c822f83bb45994ddbac9326b4c2f04f35
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

