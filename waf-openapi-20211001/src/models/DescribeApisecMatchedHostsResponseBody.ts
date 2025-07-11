// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecMatchedHostsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of APIs related to the domain name.
   * 
   * @example
   * 31
   */
  count?: number;
  /**
   * @remarks
   * The domain name or IP address.
   * 
   * @example
   * bc.aliyun.com
   */
  matchedHost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      matchedHost: 'MatchedHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      matchedHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecMatchedHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  data?: DescribeApisecMatchedHostsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D4CA088-F72B-5658-BD5B-ECE8B8F0C7BB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecMatchedHostsResponseBodyData },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

