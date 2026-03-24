// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticBillsResponseBodyBills extends $dara.Model {
  /**
   * @remarks
   * The total number of SCUs.
   * 
   * @example
   * 50
   */
  cu?: number;
  /**
   * @remarks
   * The end time of the bill. This value is a UNIX timestamp that is in UTC. Unit: milliseconds.
   * 
   * @example
   * 1717084800000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of SCUs consumed by WAF features.
   * 
   * @example
   * 30
   */
  functionCu?: number;
  /**
   * @remarks
   * The start time of the bill. This value is a UNIX timestamp that is in UTC. Unit: milliseconds.
   * 
   * @example
   * 1665484616000
   */
  startTime?: number;
  /**
   * @remarks
   * The number of security capacity units (SCUs) consumed by traffic processing.
   * 
   * @example
   * 20
   */
  trafficCu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      endTime: 'EndTime',
      functionCu: 'FunctionCu',
      startTime: 'StartTime',
      trafficCu: 'TrafficCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      endTime: 'number',
      functionCu: 'number',
      startTime: 'number',
      trafficCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bills for the on-demand WAF instance.
   */
  bills?: DescribeElasticBillsResponseBodyBills[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FBF08CB-8691-5B65-BBF8-***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bills: 'Bills',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bills: { 'type': 'array', 'itemType': DescribeElasticBillsResponseBodyBills },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bills)) {
      $dara.Model.validateArray(this.bills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

