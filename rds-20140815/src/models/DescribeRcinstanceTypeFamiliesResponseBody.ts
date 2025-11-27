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

export class DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies extends $dara.Model {
  /**
   * @remarks
   * The instance family.
   */
  instanceTypeFamily?: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: { 'type': 'array', 'itemType': DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamiliesInstanceTypeFamily },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeFamily)) {
      $dara.Model.validateArray(this.instanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceTypeFamiliesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance families.
   */
  instanceTypeFamilies?: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilies: 'InstanceTypeFamilies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilies: DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypeFamilies && typeof (this.instanceTypeFamilies as any).validate === 'function') {
      (this.instanceTypeFamilies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

