// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrainingJobResponseBodyLatestProgressOverallProgress } from "./GetTrainingJobResponseBodyLatestProgressOverallProgress";
import { GetTrainingJobResponseBodyLatestProgressRemainingTime } from "./GetTrainingJobResponseBodyLatestProgressRemainingTime";


export class GetTrainingJobResponseBodyLatestProgress extends $dara.Model {
  overallProgress?: GetTrainingJobResponseBodyLatestProgressOverallProgress;
  remainingTime?: GetTrainingJobResponseBodyLatestProgressRemainingTime;
  static names(): { [key: string]: string } {
    return {
      overallProgress: 'OverallProgress',
      remainingTime: 'RemainingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallProgress: GetTrainingJobResponseBodyLatestProgressOverallProgress,
      remainingTime: GetTrainingJobResponseBodyLatestProgressRemainingTime,
    };
  }

  validate() {
    if(this.overallProgress && typeof (this.overallProgress as any).validate === 'function') {
      (this.overallProgress as any).validate();
    }
    if(this.remainingTime && typeof (this.remainingTime as any).validate === 'function') {
      (this.remainingTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

