// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupResourceGroupEventsRequestLookupAttributes extends $dara.Model {
  /**
   * @remarks
   * The key of the attribute.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * value
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

export class LookupResourceGroupEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The time is displayed in UTC.
   * 
   * @example
   * 2025-11-30 23:43:16
   */
  endTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * This parameter is required.
   * 
   * @example
   * MemberShipChange
   */
  eventCategory?: string;
  /**
   * @remarks
   * The attributes used for advanced search.
   */
  lookupAttributes?: LookupResourceGroupEventsRequestLookupAttributes[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * ProjectA
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is displayed in UTC.
   * 
   * @example
   * 2025-11-30 23:43:16
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventCategory: 'EventCategory',
      lookupAttributes: 'LookupAttributes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventCategory: 'string',
      lookupAttributes: { 'type': 'array', 'itemType': LookupResourceGroupEventsRequestLookupAttributes },
      maxResults: 'string',
      nextToken: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lookupAttributes)) {
      $dara.Model.validateArray(this.lookupAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

