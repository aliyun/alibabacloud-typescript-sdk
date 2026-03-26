// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupInsightEventsRequestLookupAttribute extends $dara.Model {
  /**
   * @example
   * InsightType
   */
  key?: string;
  /**
   * @example
   * IpInsight
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupInsightEventsRequest extends $dara.Model {
  /**
   * @example
   * 2026-01-07T07:10:00Z
   */
  endTime?: string;
  lookupAttribute?: LookupInsightEventsRequestLookupAttribute[];
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * VjE6dLbnNpVmbz06****
   */
  nextToken?: string;
  /**
   * @example
   * 2026-01-07T04:10:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupInsightEventsRequestLookupAttribute },
      maxResults: 'string',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lookupAttribute)) {
      $dara.Model.validateArray(this.lookupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

