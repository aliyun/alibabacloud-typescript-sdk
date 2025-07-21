// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSuppressionResponseBodyDataUserSuppressions extends $dara.Model {
  /**
   * @remarks
   * Email address or domain name
   * 
   * @example
   * test@example.net
   */
  address?: string;
  /**
   * @remarks
   * Creation time, timestamp, accurate to the second.
   * 
   * @example
   * 1715667435
   */
  createTime?: number;
  /**
   * @remarks
   * Last bounce hit time, timestamp, accurate to the second.
   * 
   * @example
   * 1715667451
   */
  lastBounceTime?: number;
  /**
   * @remarks
   * Invalid address ID
   * 
   * @example
   * 59511
   */
  suppressionId?: number;
  /**
   * @remarks
   * Source of entry, invalid address type
   * - system
   * - user
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTime: 'CreateTime',
      lastBounceTime: 'LastBounceTime',
      suppressionId: 'SuppressionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      createTime: 'number',
      lastBounceTime: 'number',
      suppressionId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionResponseBodyData extends $dara.Model {
  userSuppressions?: ListUserSuppressionResponseBodyDataUserSuppressions[];
  static names(): { [key: string]: string } {
    return {
      userSuppressions: 'UserSuppressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSuppressions: { 'type': 'array', 'itemType': ListUserSuppressionResponseBodyDataUserSuppressions },
    };
  }

  validate() {
    if(Array.isArray(this.userSuppressions)) {
      $dara.Model.validateArray(this.userSuppressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSuppressionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned results.
   */
  data?: ListUserSuppressionResponseBodyData;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1A846D66-5EC7-551B-9687-5BF1963DCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUserSuppressionResponseBodyData,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

