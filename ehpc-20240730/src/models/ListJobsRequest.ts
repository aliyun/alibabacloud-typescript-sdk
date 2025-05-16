// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsRequestJobFilter } from "./ListJobsRequestJobFilter";


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-csbua72***
   */
  clusterId?: string;
  /**
   * @remarks
   * The job filter information.
   */
  jobFilter?: ListJobsRequestJobFilter;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 50.
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobFilter: 'JobFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobFilter: ListJobsRequestJobFilter,
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(this.jobFilter && typeof (this.jobFilter as any).validate === 'function') {
      (this.jobFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

