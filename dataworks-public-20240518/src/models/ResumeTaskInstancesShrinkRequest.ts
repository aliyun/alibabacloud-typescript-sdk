// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTaskInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID list of the task instance.
   */
  idsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      idsShrink: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      idsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

