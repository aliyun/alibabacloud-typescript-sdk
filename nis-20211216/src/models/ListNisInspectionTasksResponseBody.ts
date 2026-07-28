// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTasksResponseBodyInspectionTaskList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-06-18 00:14:46
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the network inspection task.
   * 
   * @example
   * NIS inspection
   */
  inspectionName?: string;
  /**
   * @remarks
   * The type of inspection solution that the network inspection task uses. Valid values: basic and customized.
   * 
   * @example
   * basic
   */
  inspectionProject?: string;
  /**
   * @remarks
   * The ID of the network inspection task.
   * 
   * @example
   * ni-8svm******hzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @remarks
   * The ID of the latest report.
   * 
   * @example
   * nir-b4c4c9******8a25e
   */
  lastUpdateReportId?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * 
   * Creating: The task is being created.
   * 
   * - Active
   * 
   * - Running
   * 
   * - Inactive
   * 
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
  /**
   * @remarks
   * The list of network inspection tasks.
   */
  inspectionTaskList?: ListNisInspectionTasksResponseBodyInspectionTaskList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If the value of this parameter is not empty, it indicates that there are more results to retrieve. If this parameter is empty, all results have been returned.
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
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

