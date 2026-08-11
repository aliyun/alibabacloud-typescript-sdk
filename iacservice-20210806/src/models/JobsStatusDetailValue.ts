// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobsStatusDetailValue extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The job execution result.
   * 
   * @example
   * Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
   */
  jobResult?: string;
  /**
   * @remarks
   * The time when the status was reached, in the format of YYYY-MM-DD HH:mm:ss. The returned value does not include a time zone identifier.
   * 
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      jobResult: 'jobResult',
      timeStamps: 'timeStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      jobResult: 'string',
      timeStamps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

