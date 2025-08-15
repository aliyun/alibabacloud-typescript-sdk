// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupEventsRequestLookupAttribute extends $dara.Model {
  /**
   * @remarks
   * The key of the query condition. Valid values:
   * 
   * *  ServiceName: the name of a specific Alibaba Cloud service.
   * *  EventName: the name of a specific event.
   * *  User: the name of the RAM user who calls a specific operation.
   * *  EventId: the ID of a specific event.
   * *  ResourceType: the type of resources.
   * *   ResourceName: the name of a specific resource.
   * *   EventRW: the read/write type of events.
   * *  EventAccessKeyId: the AccessKey ID used in events.
   * 
   * > You can use only one query condition for each query.
   * 
   * @example
   * ServiceName
   */
  key?: string;
  /**
   * @remarks
   * The value of the query condition. Valid values:
   * 
   * *   When the LookupAttribute.N.Key parameter is set to ServiceName, you can set this parameter to a value such as `Ecs`.
   * *   When the LookupAttribute.N.Key parameter is set to EventName, you can set this parameter to a value such as `ConsoleSignin`.
   * *   When the LookupAttribute.N.Key parameter is set to User, you can set this parameter to a value such as `Alice`.
   * *   When the LookupAttribute.N.Key parameter is set to EventId, you can set this parameter to a value such as `B702AFA3-FD4B-40E3-88E4-C0752FAA****`.
   * *   When the LookupAttribute.N.Key parameter is set to ResourceType, you can set this parameter to a value such as `ACS::ECS::Instance`.
   * *   When the LookupAttribute.N.Key parameter is set to ResourceName, you can set this parameter to a value such as `i-bp14664y88udkt45****`.
   * *   When the LookupAttribute.N.Key parameter is set to EventRW, you can set this parameter to `Read` or `Write`.
   * *   When the LookupAttribute.N.Key parameter is set to EventAccessKeyId, you can set this parameter to a value such as `LTAI****************`.
   * 
   * @example
   * Ecs
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

export class LookupEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which details of events are to be retrieved. Valid values:
   * 
   * *   FORWARD: ascending order.
   * *   BACKWARD: descending order. This is the default value.
   * 
   * @example
   * BACKWARD
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. The default time is the current time. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-10-15T11:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Query conditions.
   */
  lookupAttribute?: LookupEventsRequestLookupAttribute[];
  /**
   * @remarks
   * The maximum number of entries to be returned.
   * 
   * Valid values: 0 to 50.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The token used to request the next page of query results.
   * 
   * > The request parameters must be the same as those of the last request.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The default time is seven days prior to the current time. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-10-08T11:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupEventsRequestLookupAttribute },
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

