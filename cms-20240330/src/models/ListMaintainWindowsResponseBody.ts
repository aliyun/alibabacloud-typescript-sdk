// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintainWindowForView } from "./MaintainWindowForView";


export class ListMaintainWindowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of silence policies. An empty list is returned when no items match. The list items do not include workspaceFilterSetting.
   */
  maintainWindowList?: MaintainWindowForView[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. A non-empty value indicates that more results may be available, but the next page may still be empty. An empty value indicates the end of pagination.
   * 
   * @example
   * Y21zRXZlbnRCYXNlUGFnZT0y
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID of this request, used for troubleshooting and ticket tracking.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A0D1C36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindowList: 'maintainWindowList',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindowList: { 'type': 'array', 'itemType': MaintainWindowForView },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.maintainWindowList)) {
      $dara.Model.validateArray(this.maintainWindowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

