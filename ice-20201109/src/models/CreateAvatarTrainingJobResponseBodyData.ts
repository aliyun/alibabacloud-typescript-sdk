// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAvatarTrainingJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the digital human training job.
   * 
   * @example
   * ****d718e2ff4f018ccf419a7b71****
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

