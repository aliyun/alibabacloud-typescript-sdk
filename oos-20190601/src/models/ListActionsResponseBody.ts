// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListActionsResponseBodyActions } from "./ListActionsResponseBodyActions";


export class ListActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the actions.
   */
  actions?: ListActionsResponseBodyActions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9154C02-F847-4563-BB6A-6DD01A4F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

