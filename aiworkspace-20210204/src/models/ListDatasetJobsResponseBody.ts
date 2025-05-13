// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetJob } from "./DatasetJob";


export class ListDatasetJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs in the dataset.
   */
  datasetJobs?: DatasetJob[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of jobs.
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetJobs: 'DatasetJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobs: { 'type': 'array', 'itemType': DatasetJob },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetJobs)) {
      $dara.Model.validateArray(this.datasetJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

