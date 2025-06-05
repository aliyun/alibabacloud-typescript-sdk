// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZones } from "./DescribeAvailableResourceResponseBodyAvailableZones";


export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The zones in which the specified resources are available.
   */
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6829735A-FF76-58C6-AECB-27CBF135A7AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableZones && typeof (this.availableZones as any).validate === 'function') {
      (this.availableZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

