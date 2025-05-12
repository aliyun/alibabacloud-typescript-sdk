// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputClip extends $dara.Model {
  /**
   * @remarks
   * The time span of the clip.
   */
  timeSpan?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: SubmitJobsResponseBodyJobResultListJobResultJobOutputClipTimeSpan,
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

