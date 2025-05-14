// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchLibResponseBodySearchLibInfoListIndexInfo } from "./ListSearchLibResponseBodySearchLibInfoListIndexInfo";


export class ListSearchLibResponseBodySearchLibInfoList extends $dara.Model {
  indexInfo?: ListSearchLibResponseBodySearchLibInfoListIndexInfo[];
  /**
   * @remarks
   * The search library.
   * 
   * @example
   * faceSearchLib
   */
  searchLibName?: string;
  /**
   * @remarks
   * The status of the search library.
   * 
   * *   normal
   * *   deleting
   * *   deleteFail
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      indexInfo: 'IndexInfo',
      searchLibName: 'SearchLibName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexInfo: { 'type': 'array', 'itemType': ListSearchLibResponseBodySearchLibInfoListIndexInfo },
      searchLibName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexInfo)) {
      $dara.Model.validateArray(this.indexInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

