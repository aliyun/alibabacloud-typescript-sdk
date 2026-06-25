// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJVSInstanceRequestCreditConfig extends $dara.Model {
  /**
   * @remarks
   * The credit limit.
   * 
   * @example
   * 10
   */
  creditLimit?: number;
  /**
   * @remarks
   * The credit limit period.
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
   * Specifies whether to apply the configuration to all instances.
   * 
   * @example
   * true
   */
  applyToAll?: boolean;
  /**
   * @remarks
   * The credit limit configuration. New configurations overwrite existing ones.
   */
  creditConfig?: ModifyJVSInstanceRequestCreditConfig[];
  /**
   * @remarks
   * A list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The new instance name.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      applyToAll: 'ApplyToAll',
      creditConfig: 'CreditConfig',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyToAll: 'boolean',
      creditConfig: { 'type': 'array', 'itemType': ModifyJVSInstanceRequestCreditConfig },
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

