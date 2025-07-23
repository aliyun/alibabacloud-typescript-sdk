// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment job. The **ID** of the job is returned after you call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

