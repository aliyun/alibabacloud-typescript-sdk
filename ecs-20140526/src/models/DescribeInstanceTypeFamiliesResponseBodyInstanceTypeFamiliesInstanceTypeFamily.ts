// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily extends $dara.Model {
  /**
   * @remarks
   * The series of the instance family.
   * 
   * @example
   * ecs-5
   */
  generation?: string;
  /**
   * @remarks
   * The ID of the instance family.
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamilyId?: string;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
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

