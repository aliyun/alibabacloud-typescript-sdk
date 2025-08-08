// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShareResource } from "./ShareResource";


export class AlterShareResourcesRequest extends $dara.Model {
  /**
   * @example
   * clg-paimon-xxxx
   */
  catalogId?: string;
  shareResourceList?: ShareResource[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      shareResourceList: 'shareResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      shareResourceList: { 'type': 'array', 'itemType': ShareResource },
    };
  }

  validate() {
    if(Array.isArray(this.shareResourceList)) {
      $dara.Model.validateArray(this.shareResourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

