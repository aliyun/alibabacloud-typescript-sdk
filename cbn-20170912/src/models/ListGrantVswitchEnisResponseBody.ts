// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis } from "./ListGrantVswitchEnisResponseBodyGrantVswitchEnis";


export class ListGrantVSwitchEnisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ENI.
   */
  grantVSwitchEnis?: ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBFE1736-2F33-5309-9954-875B11E9519D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > If MaxResults and NextToken are sued to query results by page, ignore this parameter.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      grantVSwitchEnis: 'GrantVSwitchEnis',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantVSwitchEnis: { 'type': 'array', 'itemType': ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantVSwitchEnis)) {
      $dara.Model.validateArray(this.grantVSwitchEnis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

