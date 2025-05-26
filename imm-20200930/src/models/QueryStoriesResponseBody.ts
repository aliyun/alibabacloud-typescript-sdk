// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Story } from "./Story";


export class QueryStoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3Qx****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C5C1E0F-D8B8-4DA0-8127-EC32C771****
   */
  requestId?: string;
  /**
   * @remarks
   * The stories.
   */
  stories?: Story[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stories: 'Stories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stories: { 'type': 'array', 'itemType': Story },
    };
  }

  validate() {
    if(Array.isArray(this.stories)) {
      $dara.Model.validateArray(this.stories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

