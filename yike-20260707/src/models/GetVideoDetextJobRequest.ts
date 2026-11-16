// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDetextJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video text removal job returned by SubmitVideoDetextJob.
   * 
   * This parameter is required.
   * 
   * @example
   * vdt_0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

