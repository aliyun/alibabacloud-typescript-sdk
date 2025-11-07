// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTasksResponseBodyInspectionTaskList extends $dara.Model {
  /**
   * @example
   * 2024-06-18 00:14:46
   */
  createTime?: string;
  inspectionName?: string;
  /**
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @example
   * ni-8svm******hzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * nir-b4c4c9******8a25e
   */
  lastUpdateReportId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      lastUpdateReportId: 'LastUpdateReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      lastUpdateReportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionTasksResponseBody extends $dara.Model {
  inspectionTaskList?: ListNisInspectionTasksResponseBodyInspectionTaskList[];
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
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskList: 'InspectionTaskList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskList: { 'type': 'array', 'itemType': ListNisInspectionTasksResponseBodyInspectionTaskList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionTaskList)) {
      $dara.Model.validateArray(this.inspectionTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

