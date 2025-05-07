// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily extends $dara.Model {
  /**
   * @remarks
   * The description of the instance family.
   */
  instanceTypeFamilyDesc?: string;
  /**
   * @remarks
   * The ID of the instance family.
   * 
   * @example
   * x.6cm
   */
  instanceTypeFamilyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilyDesc: 'InstanceTypeFamilyDesc',
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilyDesc: 'string',
      instanceTypeFamilyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

