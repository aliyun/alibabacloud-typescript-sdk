// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceListResponseBodyCommodityInstances } from "./GetInstanceListResponseBodyCommodityInstances";


export class GetInstanceListResponseBody extends $dara.Model {
  code?: string;
  commodityInstances?: GetInstanceListResponseBodyCommodityInstances[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commodityInstances: 'CommodityInstances',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commodityInstances: { 'type': 'array', 'itemType': GetInstanceListResponseBodyCommodityInstances },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commodityInstances)) {
      $dara.Model.validateArray(this.commodityInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

