// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputClipTimeSpan } from "./ListJobResponseBodyJobListJobOutputClipTimeSpan";


export class ListJobResponseBodyJobListJobOutputClip extends $dara.Model {
  /**
   * @remarks
   * The time span of the clip.
   */
  timeSpan?: ListJobResponseBodyJobListJobOutputClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSpan: ListJobResponseBodyJobListJobOutputClipTimeSpan,
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

