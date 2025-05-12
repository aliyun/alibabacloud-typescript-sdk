// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. The value is an integer. Unit: seconds.
   * 
   * *   Valid values: **[1,10]**.
   * *   Default value: **10**.
   * 
   * @example
   * 20
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

