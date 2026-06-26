// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShareResource } from "./ShareResource";


export class ListShareResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the catalog.
   * 
   * @example
   * clg-paimon-xxxx
   */
  catalogId?: string;
  /**
   * @remarks
   * The token used to page through results. A null value indicates that this is the last page.
   * 
   * @example
   * ""
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The shared resources.
   */
  shareResources?: ShareResource[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      nextPageToken: 'nextPageToken',
      shareResources: 'shareResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      nextPageToken: 'string',
      shareResources: { 'type': 'array', 'itemType': ShareResource },
    };
  }

  validate() {
    if(Array.isArray(this.shareResources)) {
      $dara.Model.validateArray(this.shareResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

