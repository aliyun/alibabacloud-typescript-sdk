// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNisInspectionTaskReportsResponseBodyInspectionReportList } from "./ListNisInspectionTaskReportsResponseBodyInspectionReportList";


export class ListNisInspectionTaskReportsResponseBody extends $dara.Model {
  inspectionReportList?: ListNisInspectionTaskReportsResponseBodyInspectionReportList[];
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
   * 0D213AF9-7B8A-51A8-B411-2D797A1A447B
   */
  requestId?: string;
  /**
   * @example
   * 34
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionReportList: 'InspectionReportList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportList: { 'type': 'array', 'itemType': ListNisInspectionTaskReportsResponseBodyInspectionReportList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionReportList)) {
      $dara.Model.validateArray(this.inspectionReportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

