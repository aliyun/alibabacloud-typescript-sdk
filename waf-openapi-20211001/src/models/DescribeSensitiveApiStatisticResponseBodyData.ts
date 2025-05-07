// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSensitiveApiStatisticResponseBodyDataList } from "./DescribeSensitiveApiStatisticResponseBodyDataList";


export class DescribeSensitiveApiStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of personal information records involved in cross-border data transfer by domain name.
   * 
   * @example
   * 213
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The domain name-related APIs.
   */
  list?: DescribeSensitiveApiStatisticResponseBodyDataList[];
  /**
   * @remarks
   * The domain name or IP address.
   * 
   * @example
   * www.***.top
   */
  matchedHost?: string;
  /**
   * @remarks
   * The number of sensitive personal information records involved in cross-border data transfer by domain name.
   * 
   * @example
   * 127
   */
  sensitiveOutboundCount?: number;
  static names(): { [key: string]: string } {
    return {
      infoOutboundCount: 'InfoOutboundCount',
      list: 'List',
      matchedHost: 'MatchedHost',
      sensitiveOutboundCount: 'SensitiveOutboundCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoOutboundCount: 'number',
      list: { 'type': 'array', 'itemType': DescribeSensitiveApiStatisticResponseBodyDataList },
      matchedHost: 'string',
      sensitiveOutboundCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

