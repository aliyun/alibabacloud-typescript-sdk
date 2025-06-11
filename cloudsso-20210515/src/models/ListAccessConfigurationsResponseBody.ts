// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccessConfigurationsResponseBodyAccessConfigurations } from "./ListAccessConfigurationsResponseBodyAccessConfigurations";


export class ListAccessConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access configurations.
   */
  accessConfigurations?: ListAccessConfigurationsResponseBodyAccessConfigurations[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the value of the `IsTruncated` parameter is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BC0CBAC-45E1-5BD3-BF6E-F69D1D5391C2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurations: 'AccessConfigurations',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurations: { 'type': 'array', 'itemType': ListAccessConfigurationsResponseBodyAccessConfigurations },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessConfigurations)) {
      $dara.Model.validateArray(this.accessConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

