// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePdnsThreatStatisticsResponseBodyData } from "./DescribePdnsThreatStatisticsResponseBodyData";


export class DescribePdnsThreatStatisticsResponseBody extends $dara.Model {
  data?: DescribePdnsThreatStatisticsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': DescribePdnsThreatStatisticsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

