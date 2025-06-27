// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTasksRequest extends $dara.Model {
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
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml1/R9jhHkiH8eW3CfaOYU0CEL7yiT0zae6J8v1zYNg+d1
   */
  nextToken?: string;
  /**
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

