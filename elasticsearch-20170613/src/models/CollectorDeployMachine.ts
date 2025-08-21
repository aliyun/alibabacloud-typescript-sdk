// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CollectorDeployMachineMachines extends $dara.Model {
  /**
   * @example
   * UNINSTALLED
   */
  agentStatus?: string;
  /**
   * @example
   * i-xs34****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectorDeployMachine extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @example
   * default_ct-cn-f3t0dq5p97199ru3z
   */
  groupId?: string;
  /**
   * @example
   * ce93d7566df2141f490f0f60f646252c3
   */
  instanceId?: string;
  machines?: CollectorDeployMachineMachines[];
  /**
   * @example
   * 1
   */
  successPodsCount?: string;
  /**
   * @example
   * 2
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACKCluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      groupId: 'groupId',
      instanceId: 'instanceId',
      machines: 'machines',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      groupId: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': CollectorDeployMachineMachines },
      successPodsCount: 'string',
      totalPodsCount: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machines)) {
      $dara.Model.validateArray(this.machines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

