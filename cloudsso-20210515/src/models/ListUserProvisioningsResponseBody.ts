// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserProvisioningsResponseBodyUserProvisionings } from "./ListUserProvisioningsResponseBodyUserProvisionings";


export class ListUserProvisioningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
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
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * 27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F76AF4FC-****-****-B7CB-74F3********
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
   * The RAM user provisionings.
   */
  userProvisionings?: ListUserProvisioningsResponseBodyUserProvisionings[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      userProvisionings: 'UserProvisionings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      userProvisionings: { 'type': 'array', 'itemType': ListUserProvisioningsResponseBodyUserProvisionings },
    };
  }

  validate() {
    if(Array.isArray(this.userProvisionings)) {
      $dara.Model.validateArray(this.userProvisionings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

