// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BizTraceConfig } from "./BizTraceConfig";


export class ListBizTracesResponseBody extends $dara.Model {
  items?: BizTraceConfig[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aa9d0e569b88098a0e3155c29b473201a
   */
  nextToken?: string;
  /**
   * @example
   * 0CEC5375-C554-562B-A65F-*****
   */
  requestId?: string;
  /**
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': BizTraceConfig },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

