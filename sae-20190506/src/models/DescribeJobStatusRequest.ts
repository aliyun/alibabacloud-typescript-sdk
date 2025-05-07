// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template.
   * 
   * This parameter is required.
   * 
   * @example
   * e1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * event-b798157b-40a2-4388-b578-71fb897103**-**
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

