// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoList } from "./SearchMediaResponseBodyMediaInfoList";


export class SearchMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The media assets that meet the requirements.
   */
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F61C357-ACC0-57FB-876E-D58795335E59
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination identifier.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The total number of media assets that meet the conditions.
   * 
   * @example
   * 163
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaInfoList: 'MediaInfoList',
      requestId: 'RequestId',
      scrollToken: 'ScrollToken',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoList },
      requestId: 'string',
      scrollToken: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfoList)) {
      $dara.Model.validateArray(this.mediaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

