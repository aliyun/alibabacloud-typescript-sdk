// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverAvailableZonesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The status of resources in the zone. Valid values:
   * 
   * - NORMAL: Normal
   * 
   * - SOLD_OUT: Sold out
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of zones and their resource statuses.
   */
  availableZones?: DescribeResolverAvailableZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The unique request ID.
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

