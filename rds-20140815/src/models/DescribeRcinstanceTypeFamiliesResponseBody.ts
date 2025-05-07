// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceTypeFamiliesResponseBodyInstanceTypeFamilies } from "./DescribeRcinstanceTypeFamiliesResponseBodyInstanceTypeFamilies";


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

