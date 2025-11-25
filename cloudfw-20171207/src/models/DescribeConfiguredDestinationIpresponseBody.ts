// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDestinationIPResponseBodyDestinations extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1.1.1.1
   */
  destinationIP?: string;
  destinationISP?: string;
  /**
   * @example
   * cn-shenzhen
   */
  destinationRegion?: string;
  /**
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
  destinations?: DescribeConfiguredDestinationIPResponseBodyDestinations[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F0AE91F8-E6C5-50D4-983F-FC53672****
   */
  requestId?: string;
  /**
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

