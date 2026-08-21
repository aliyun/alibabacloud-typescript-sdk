// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentForClusterRequest extends $dara.Model {
  xDebugId?: string;
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
   * > Pass the ID of the ACK cluster for this parameter.
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
   * The canary release environment.
   * 
   * @example
   * {"type":"numeric","config":{"value":2}}
   */
  grayscaleConfig?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
      configId: 'config_id',
      grayscaleConfig: 'grayscale_config',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
      configId: 'string',
      grayscaleConfig: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

