// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of job IDs.
   */
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

