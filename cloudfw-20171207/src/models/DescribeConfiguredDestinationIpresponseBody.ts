// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDestinationIPResponseBodyDestinations extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 1.1.1.1
   */
  destinationIP?: string;
  /**
   * @remarks
   * The ISP of the destination.
   * 
   * @example
   * telecom
   */
  destinationISP?: string;
  /**
   * @remarks
   * The destination region.
   * 
   * @example
   * cn-shenzhen
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The time of the operation. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408189
   */
  operationTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      destinationIP: 'DestinationIP',
      destinationISP: 'DestinationISP',
      destinationRegion: 'DestinationRegion',
      operationTime: 'OperationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      destinationIP: 'string',
      destinationISP: 'string',
      destinationRegion: 'string',
      operationTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfiguredDestinationIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of destinations.
   */
  destinations?: DescribeConfiguredDestinationIPResponseBodyDestinations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0AE91F8-E6C5-50D4-983F-FC53672****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      destinations: 'Destinations',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': DescribeConfiguredDestinationIPResponseBodyDestinations },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

