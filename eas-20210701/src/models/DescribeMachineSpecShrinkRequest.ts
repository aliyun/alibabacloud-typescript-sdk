// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecShrinkRequest extends $dara.Model {
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
  instanceTypesShrink?: string;
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
      instanceTypesShrink: 'InstanceTypes',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceTypesShrink: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

