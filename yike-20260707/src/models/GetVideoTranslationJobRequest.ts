// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The video translation job ID returned by SubmitVideoTranslationJob.
   * 
   * This parameter is required.
   * 
   * @example
   * vtj_0123456789abcdef0123456789abcdef
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

