// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJVSInstanceRequestCreditConfig extends $dara.Model {
  /**
   * @remarks
   * The quota limit.
   * 
   * @example
   * 10
   */
  creditLimit?: number;
  /**
   * @remarks
   * The dimension of the current credit. Valid values:
   * 
   * - total: Total usage limit.
   * - month: Monthly. The quota resets based on the resource activation time cycle.
   * - day: Daily. The quota resets at 00:00.
   * 
   * @example
   * day
   */
  limitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      creditLimit: 'CreditLimit',
      limitPeriod: 'LimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditLimit: 'number',
      limitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJVSInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The target version, such as 2607W1. Set this parameter to latest to automatically resolve to the latest available version.
   */
  agentVersion?: string;
  /**
   * @remarks
   * Specifies whether to apply the configuration to all instances.
   * 
   * @example
   * true
   */
  applyToAll?: boolean;
  /**
   * @remarks
   * The credit quota configuration. If you submit the configuration multiple times, the latest configuration overwrites the previous one.
   */
  creditConfig?: ModifyJVSInstanceRequestCreditConfig[];
  imageId?: string;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      applyToAll: 'ApplyToAll',
      creditConfig: 'CreditConfig',
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      applyToAll: 'boolean',
      creditConfig: { 'type': 'array', 'itemType': ModifyJVSInstanceRequestCreditConfig },
      imageId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creditConfig)) {
      $dara.Model.validateArray(this.creditConfig);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

