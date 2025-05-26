// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceGroupSpecResponseBodySpecs } from "./DescribeResourceGroupSpecResponseBodySpecs";


export class DescribeResourceGroupSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10226189-4391-5B10-97AF-5CA5XXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The queried specifications.
   */
  specs?: DescribeResourceGroupSpecResponseBodySpecs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specs: { 'type': 'array', 'itemType': DescribeResourceGroupSpecResponseBodySpecs },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

