// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScriptsResponseBodyScripts } from "./ListScriptsResponseBodyScripts";


export class ListScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The position of the data read.
   * 
   * @example
   * dd6b1b2a-5837-5237-abe4-ff0c89568982
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The scripts.
   */
  scripts?: ListScriptsResponseBodyScripts[];
  /**
   * @remarks
   * The total amount of data under the conditions of this request.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scripts: 'Scripts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scripts: { 'type': 'array', 'itemType': ListScriptsResponseBodyScripts },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scripts)) {
      $dara.Model.validateArray(this.scripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

