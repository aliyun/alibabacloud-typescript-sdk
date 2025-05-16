// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the jobs that you want to stop.
   */
  jobIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

