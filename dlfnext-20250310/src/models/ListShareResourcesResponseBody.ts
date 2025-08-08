// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShareResource } from "./ShareResource";


export class ListShareResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * clg-paimon-xxxx
   */
  catalogId?: string;
  /**
   * @example
   * ""
   */
  nextPageToken?: string;
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

