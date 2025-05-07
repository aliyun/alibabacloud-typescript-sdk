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

