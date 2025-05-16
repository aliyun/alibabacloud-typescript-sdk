// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobShrinkRequest extends $dara.Model {
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
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobName: 'JobName',
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobName: 'string',
      jobSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

