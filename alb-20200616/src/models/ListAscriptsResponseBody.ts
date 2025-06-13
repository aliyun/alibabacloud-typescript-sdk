// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAScriptsResponseBodyAScripts } from "./ListAscriptsResponseBodyAscripts";


export class ListAScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AScript rules.
   */
  AScripts?: ListAScriptsResponseBodyAScripts[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * This parameter is required.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA81429-F160-593A-8AB5-A2A9617845B9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > This parameter is optional. By default, this parameter is not returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': ListAScriptsResponseBodyAScripts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.AScripts)) {
      $dara.Model.validateArray(this.AScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

