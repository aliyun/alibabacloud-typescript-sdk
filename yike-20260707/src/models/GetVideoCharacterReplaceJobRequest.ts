// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCharacterReplaceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID, which is returned by SubmitVideoCharacterReplaceJob.
   * 
   * @example
   * ag_83baeea38b534ee1937b8a4acd08****
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

