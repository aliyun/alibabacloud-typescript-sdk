// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTopDomainsByFlowResponseBodyTopDomains } from "./DescribeTopDomainsByFlowResponseBodyTopDomains";


export class DescribeTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of accelerated domain names that belong to the current Alibaba Cloud account.
   * 
   * @example
   * 68
   */
  domainCount?: number;
  /**
   * @remarks
   * The total number of accelerated domain names that are in the **Enabled** state within the current Alibaba Cloud account.
   * 
   * @example
   * 68
   */
  domainOnlineCount?: number;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-12-23T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-22T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The top N domain names ranked by network traffic.
   */
  topDomains?: DescribeTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      domainOnlineCount: 'number',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  validate() {
    if(this.topDomains && typeof (this.topDomains as any).validate === 'function') {
      (this.topDomains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

