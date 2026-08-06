// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. A null value indicates that this is the last page.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * A list of view names.
   */
  views?: string[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      views: 'views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      views: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.views)) {
      $dara.Model.validateArray(this.views);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

