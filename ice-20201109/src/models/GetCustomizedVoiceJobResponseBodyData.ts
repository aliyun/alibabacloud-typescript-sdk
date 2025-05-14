// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob } from "./GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob";


export class GetCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the human voice cloning job.
   */
  customizedVoiceJob?: GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceJob: 'CustomizedVoiceJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceJob: GetCustomizedVoiceJobResponseBodyDataCustomizedVoiceJob,
    };
  }

  validate() {
    if(this.customizedVoiceJob && typeof (this.customizedVoiceJob as any).validate === 'function') {
      (this.customizedVoiceJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

