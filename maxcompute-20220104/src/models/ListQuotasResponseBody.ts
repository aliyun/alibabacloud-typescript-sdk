// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasResponseBodyData } from "./ListQuotasResponseBodyData";
import { ListQuotasResponseBodyQuotaInfoList } from "./ListQuotasResponseBodyQuotaInfoList";


export class ListQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2w6Olxc+cMPjUtUMo/CvPe4IK7f7kIQFrIZjyc
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQuotasResponseBodyData;
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
  quotaInfoList?: ListQuotasResponseBodyQuotaInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc12e6f16677875480593081d2956
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      data: 'data',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      data: ListQuotasResponseBodyData,
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

