// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTasksRequest extends $dara.Model {
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set this parameter to the NextToken value returned from a previous call.
   * 
   * @example
   * hKrS+MVXkuOgztXnvdml1/R9jhHkiH8eW3CfaOYU0CEL7yiT0zae6J8v1zYNg+d1
   */
  nextToken?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * 
   * - Creating
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
      inspectionName: 'InspectionName',
      inspectionProject: 'InspectionProject',
      inspectionTaskId: 'InspectionTaskId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionName: 'string',
      inspectionProject: 'string',
      inspectionTaskId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

