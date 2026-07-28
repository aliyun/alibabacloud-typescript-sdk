// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTaskReportsResponseBodyInspectionReportList extends $dara.Model {
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * nir-7c3dd178738a429abe6d
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTaskReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of inspection reports.
   */
  inspectionReportList?: ListNisInspectionTaskReportsResponseBodyInspectionReportList[];
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If this parameter is not returned, it indicates that no more results are available.
   * 
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D213AF9-7B8A-51A8-B411-2D797A1A447B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

