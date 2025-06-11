// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserProvisioningEventsResponseBodyUserProvisioningEvents } from "./ListUserProvisioningEventsResponseBodyUserProvisioningEvents";


export class ListUserProvisioningEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * 2eEMmhmLa1b7Bbj9UzCgZUGj8DpDeG5TbNknuNKNP2h84KjJRnAb7vzzSDkYNmsidnAybyJYBfnPPB6xfgw54B1Wub2KQmC8LofzqBW2Y****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D85B43D-EF98-396D-B426-837E428D2D39
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 110
   */
  totalCounts?: number;
  /**
   * @remarks
   * The RAM user provisioning events.
   */
  userProvisioningEvents?: ListUserProvisioningEventsResponseBodyUserProvisioningEvents[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      userProvisioningEvents: 'UserProvisioningEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      userProvisioningEvents: { 'type': 'array', 'itemType': ListUserProvisioningEventsResponseBodyUserProvisioningEvents },
    };
  }

  validate() {
    if(Array.isArray(this.userProvisioningEvents)) {
      $dara.Model.validateArray(this.userProvisioningEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

