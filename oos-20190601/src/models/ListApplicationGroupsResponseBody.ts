// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationGroupsResponseBodyApplicationGroups } from "./ListApplicationGroupsResponseBodyApplicationGroups";


export class ListApplicationGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application group.
   */
  applicationGroups?: ListApplicationGroupsResponseBodyApplicationGroups[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69D97BF2-5DF2-544C-A650-36A474E17BC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroups: 'ApplicationGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroups: { 'type': 'array', 'itemType': ListApplicationGroupsResponseBodyApplicationGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationGroups)) {
      $dara.Model.validateArray(this.applicationGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

