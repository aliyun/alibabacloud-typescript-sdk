// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobStatusDetailValue extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remarks
   */
  comment?: string;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
   */
  jobResult?: string;
  /**
   * @remarks
   * The time when the status is reached.
   * 
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * Error：Cannot import non-existent remote object
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      jobResult: 'jobResult',
      timeStamps: 'timeStamps',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      jobResult: 'string',
      timeStamps: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

