// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamilies } from "./DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamilies";


export class DescribeInstanceTypeFamiliesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance families.
   */
  instanceTypeFamilies?: DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamilies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      instanceTypeFamilies: DescribeInstanceTypeFamiliesResponseBodyInstanceTypeFamilies,
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

