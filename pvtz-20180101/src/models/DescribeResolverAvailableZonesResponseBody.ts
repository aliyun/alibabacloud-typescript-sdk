// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResolverAvailableZonesResponseBodyAvailableZones } from "./DescribeResolverAvailableZonesResponseBodyAvailableZones";


export class DescribeResolverAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried zones.
   */
  availableZones?: DescribeResolverAvailableZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23268E49-0C3E-4A2C-AB70-B4C7D092470B
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
      availableZones: { 'type': 'array', 'itemType': DescribeResolverAvailableZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

