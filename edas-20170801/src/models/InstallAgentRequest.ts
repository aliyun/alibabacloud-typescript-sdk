// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * b3e3f77b-462e-****-****-bec8727a4dc8
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * true
   */
  doAsync?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance. Separate multiple IDs with commas (,). Example: instanceId1,instanceId2.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ze7s2v0b789k60pk1af
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      doAsync: 'DoAsync',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      doAsync: 'boolean',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

