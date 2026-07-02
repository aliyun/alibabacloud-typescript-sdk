// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentForClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > The cluster ID here must be an ACK cluster ID.
   * 
   * @example
   * c9d7f3fc3d42942afbcb65c1100ffb19d
   */
  clusterId?: string;
  /**
   * @remarks
   * The component configuration ID.
   * 
   * @example
   * 8gj86wrt7-3170-412c-8e67-da3389ecg6a9
   */
  configId?: string;
  /**
   * @remarks
   * The canary release configuration.
   * 
   * @example
   * {"type":"numeric","config":{"value":2}}
   */
  grayscaleConfig?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
      configId: 'config_id',
      grayscaleConfig: 'grayscale_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
      configId: 'string',
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

