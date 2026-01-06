// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotUnsubscriptionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 500
   */
  totalCount?: number;
  unsubscribedStaffIds?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
      unsubscribedStaffIds: 'unsubscribedStaffIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      unsubscribedStaffIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unsubscribedStaffIds)) {
      $dara.Model.validateArray(this.unsubscribedStaffIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

