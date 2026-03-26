// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightsEventsCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  count?: number;
  /**
   * @example
   * IpInsight
   */
  insightType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insightType: 'InsightType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      insightType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInsightsEventsCountResponseBody extends $dara.Model {
  data?: GetInsightsEventsCountResponseBodyData[];
  /**
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  /**
   * @example
   * 4ABAEA6E-C740-5CE2-A003-643E5519****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInsightsEventsCountResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
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

