// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComputeResourceResponseBodyComputeResource extends $dara.Model {
  /**
   * @remarks
   * The specifications of computing resources displayed in the console.
   * 
   * @example
   * 8 Core 32 GB
   */
  displayValue?: string;
  /**
   * @remarks
   * The actual specifications of computing resources.
   * 
   * @example
   * 8 Core 32 GB
   */
  realValue?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'DisplayValue',
      realValue: 'RealValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      realValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried specifications of computing resources.
   */
  computeResource?: DescribeComputeResourceResponseBodyComputeResource[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: { 'type': 'array', 'itemType': DescribeComputeResourceResponseBodyComputeResource },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.computeResource)) {
      $dara.Model.validateArray(this.computeResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

