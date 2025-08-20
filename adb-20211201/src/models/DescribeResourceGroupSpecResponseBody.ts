// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupSpecResponseBodySpecs extends $dara.Model {
  /**
   * @remarks
   * The allocation units supported by this specification.
   */
  allocateUnits?: string[];
  /**
   * @remarks
   * The maximum number of resource groups that can be used with this specification.
   * 
   * @example
   * 8
   */
  maxQuantity?: number;
  /**
   * @remarks
   * The name of the specification.
   * 
   * @example
   * xlarge
   */
  name?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * GPU
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allocateUnits: 'AllocateUnits',
      maxQuantity: 'MaxQuantity',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateUnits: { 'type': 'array', 'itemType': 'string' },
      maxQuantity: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allocateUnits)) {
      $dara.Model.validateArray(this.allocateUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

