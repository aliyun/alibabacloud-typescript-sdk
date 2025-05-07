// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBodyAvailableZones } from "./DescribeAvailableZonesResponseBodyAvailableZones";


export class DescribeAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available zones in the region.
   */
  availableZones?: DescribeAvailableZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4256E149-C3C4-4FA7-BDEA-13CA415E8763
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
      availableZones: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZones },
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

