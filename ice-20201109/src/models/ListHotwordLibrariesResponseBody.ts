// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotwordLibrariesResponseBodyHotwordLibraryList } from "./ListHotwordLibrariesResponseBodyHotwordLibraryList";


export class ListHotwordLibrariesResponseBody extends $dara.Model {
  hotwordLibraryList?: ListHotwordLibrariesResponseBodyHotwordLibraryList[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * CBB6BC61D08
   */
  nextToken?: string;
  /**
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotwordLibraryList: 'HotwordLibraryList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotwordLibraryList: { 'type': 'array', 'itemType': ListHotwordLibrariesResponseBodyHotwordLibraryList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotwordLibraryList)) {
      $dara.Model.validateArray(this.hotwordLibraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

