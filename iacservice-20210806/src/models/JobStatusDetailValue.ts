// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobStatusDetailValue extends $dara.Model {
  comment?: string;
  /**
   * @example
   * {}
   */
  jobResult?: string;
  /**
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
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

