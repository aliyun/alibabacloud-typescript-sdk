// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. The value must be an integer. Unit: seconds.
   * 
   * *   Valid values: [1,10].
   * *   Default value: 10.
   * 
   * @example
   * 10
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

