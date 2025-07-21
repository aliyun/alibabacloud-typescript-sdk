// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpfilterListResponseBodyDataIpfilters extends $dara.Model {
  /**
   * @remarks
   * timestamp
   * 
   * @example
   * 1653547140
   */
  createTime?: string;
  /**
   * @remarks
   * Record ID
   * 
   * @example
   * 10083
   */
  id?: string;
  /**
   * @remarks
   * IP address/IP range/IP segment
   * 
   * @example
   * xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx-xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx/xxx
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponseBodyData extends $dara.Model {
  ipfilters?: GetIpfilterListResponseBodyDataIpfilters[];
  static names(): { [key: string]: string } {
    return {
      ipfilters: 'ipfilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipfilters: { 'type': 'array', 'itemType': GetIpfilterListResponseBodyDataIpfilters },
    };
  }

  validate() {
    if(Array.isArray(this.ipfilters)) {
      $dara.Model.validateArray(this.ipfilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpfilterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page
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
   * 84DD77C7-A091-5139-9530-2D1F7CCE59E0
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Data records
   */
  data?: GetIpfilterListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: GetIpfilterListResponseBodyData,
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

