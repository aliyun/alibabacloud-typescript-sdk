// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFilePushStatusesResponseBodyPushStatuses } from "./ListFilePushStatusesResponseBodyPushStatuses";


export class ListFilePushStatusesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  pushStatuses?: ListFilePushStatusesResponseBodyPushStatuses[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushStatuses: 'PushStatuses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushStatuses: { 'type': 'array', 'itemType': ListFilePushStatusesResponseBodyPushStatuses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pushStatuses)) {
      $dara.Model.validateArray(this.pushStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

