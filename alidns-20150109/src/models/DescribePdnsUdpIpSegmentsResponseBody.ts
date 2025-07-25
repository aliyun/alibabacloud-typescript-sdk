// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsUdpIpSegmentsResponseBodyIpSegments extends $dara.Model {
  createDate?: string;
  createTimestamp?: number;
  id?: string;
  ip?: string;
  mask?: number;
  name?: string;
  secretKey?: string;
  state?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ip: 'Ip',
      mask: 'Mask',
      name: 'Name',
      secretKey: 'SecretKey',
      state: 'State',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      createTimestamp: 'number',
      id: 'string',
      ip: 'string',
      mask: 'number',
      name: 'string',
      secretKey: 'string',
      state: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUdpIpSegmentsResponseBody extends $dara.Model {
  ipSegments?: DescribePdnsUdpIpSegmentsResponseBodyIpSegments[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPages?: string;
  static names(): { [key: string]: string } {
    return {
      ipSegments: 'IpSegments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSegments: { 'type': 'array', 'itemType': DescribePdnsUdpIpSegmentsResponseBodyIpSegments },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPages: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSegments)) {
      $dara.Model.validateArray(this.ipSegments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

