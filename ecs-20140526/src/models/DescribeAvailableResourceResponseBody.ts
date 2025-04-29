// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZones } from "./DescribeAvailableResourceResponseBodyAvailableZones";


export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the zones in which resources are available.
   */
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0041D94C-FB92-4C49-B115-259DA1C*****
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

