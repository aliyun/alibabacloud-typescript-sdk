// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasResponseBodyDataQuotaInfoList } from "./ListQuotasResponseBodyDataQuotaInfoList";


export class ListQuotasResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * "abcde"
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of quotas.
   */
  quotaInfoList?: ListQuotasResponseBodyDataQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

