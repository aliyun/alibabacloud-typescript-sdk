// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentForClusterRequest extends $dara.Model {
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
   * c9d7f3fc3d42942afbcb65c1100ffb19d
   */
  clusterId?: string;
  grayscaleConfig?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
      grayscaleConfig: 'grayscale_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
      grayscaleConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

