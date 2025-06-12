// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPCAInstanceResponseBodyPCAInstanceList } from "./ListPcainstanceResponseBodyPcainstanceList";


export class ListPCAInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  PCAInstanceList?: ListPCAInstanceResponseBodyPCAInstanceList[];
  /**
   * @example
   * EECA10D5-BD0F-4EF1-B3EA-B4578E5C6F8E
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      PCAInstanceList: 'PCAInstanceList',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      PCAInstanceList: { 'type': 'array', 'itemType': ListPCAInstanceResponseBodyPCAInstanceList },
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.PCAInstanceList)) {
      $dara.Model.validateArray(this.PCAInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

