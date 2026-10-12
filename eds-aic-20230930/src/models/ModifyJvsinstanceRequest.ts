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
   * The period of the current credit.
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
   * The target version of AI Engine, such as 2607W1. You can also set this parameter to latest to automatically resolve to the latest available version.
   * 
   * @example
   * latest
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
   * The credit limit configuration. Subsequent quota configurations overwrite previous ones.
   */
  creditConfig?: ModifyJVSInstanceRequestCreditConfig[];
  /**
   * @remarks
   * The image ID.
   */
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

