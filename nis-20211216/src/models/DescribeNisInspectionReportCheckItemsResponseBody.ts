// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList } from "./DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList";


export class DescribeNisInspectionReportCheckItemsResponseBody extends $dara.Model {
  checkItemList?: DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList[];
  /**
   * @example
   * nir-ffd1af****196d0
   */
  inspectionReportId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkItemList: 'CheckItemList',
      inspectionReportId: 'InspectionReportId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemList: { 'type': 'array', 'itemType': DescribeNisInspectionReportCheckItemsResponseBodyCheckItemList },
      inspectionReportId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkItemList)) {
      $dara.Model.validateArray(this.checkItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

