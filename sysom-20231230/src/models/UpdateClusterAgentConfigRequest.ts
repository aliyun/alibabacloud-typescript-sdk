// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component whose configuration is to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the cluster. You can call the ListClusters operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c8b90bc1b2ef0436f81213c032b75c5f3
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the component configuration to install on the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * f0078fbb-4213-11f0-a19b-00163e4ae208
   */
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      clusterId: 'clusterId',
      configId: 'configId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      clusterId: 'string',
      configId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

