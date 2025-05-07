// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowTopUrlResponseBodyRuleHitsTopUrl extends $dara.Model {
  /**
   * @remarks
   * The total number of requests that are initiated by using the URL.
   * 
   * @example
   * 181174784
   */
  count?: number;
  /**
   * @remarks
   * The URL that is used to initiate requests.
   * 
   * @example
   * www.aliyundoc.com/path1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

