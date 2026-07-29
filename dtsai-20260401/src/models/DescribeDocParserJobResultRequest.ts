// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobResultRequest extends $dara.Model {
  /**
   * @remarks
   * The document parsing task ID. You can obtain this ID by calling CreateDocParserJob.
   * 
   * This parameter is required.
   * 
   * @example
   * job_abc123
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

