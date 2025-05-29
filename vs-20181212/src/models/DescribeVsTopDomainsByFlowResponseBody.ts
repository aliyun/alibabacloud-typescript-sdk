// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsTopDomainsByFlowResponseBodyTopDomains } from "./DescribeVsTopDomainsByFlowResponseBodyTopDomains";


export class DescribeVsTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  domainCount?: number;
  /**
   * @example
   * 12
   */
  domainOnlineCount?: number;
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  topDomains?: DescribeVsTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeVsTopDomainsByFlowResponseBodyTopDomains,
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

