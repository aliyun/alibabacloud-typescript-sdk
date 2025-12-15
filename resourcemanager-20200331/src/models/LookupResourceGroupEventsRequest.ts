// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupResourceGroupEventsRequestLookupAttributes extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
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
   * @example
   * 2025-11-30 23:43:16
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MemberShipChange
   */
  eventCategory?: string;
  lookupAttributes?: LookupResourceGroupEventsRequestLookupAttributes[];
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @example
   * ProjectA
   */
  resourceGroupDisplayName?: string;
  /**
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
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

