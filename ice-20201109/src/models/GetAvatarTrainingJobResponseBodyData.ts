// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob } from "./GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob";


export class GetAvatarTrainingJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the digital human training job.
   */
  avatarTrainingJob?: GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob;
  static names(): { [key: string]: string } {
    return {
      avatarTrainingJob: 'AvatarTrainingJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarTrainingJob: GetAvatarTrainingJobResponseBodyDataAvatarTrainingJob,
    };
  }

  validate() {
    if(this.avatarTrainingJob && typeof (this.avatarTrainingJob as any).validate === 'function') {
      (this.avatarTrainingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

