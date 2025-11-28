// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecShrinkRequest extends $dara.Model {
  chargeType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @deprecated
   */
  instanceTypesShrink?: string;
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

