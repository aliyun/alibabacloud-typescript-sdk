// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. The default value is \\`PostPaid\\`.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * No input required
   * 
   * @deprecated
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The resource type. The default value is \\`Public\\`.
   * 
   * @example
   * Public
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceTypes: 'InstanceTypes',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

