// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobStatusDetailValue extends $dara.Model {
  /**
   * @example
   * {}
   */
  jobResult?: string;
  comment?: string;
  /**
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  static names(): { [key: string]: string } {
    return {
      jobResult: 'jobResult',
      comment: 'comment',
      timeStamps: 'timeStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResult: 'string',
      comment: 'string',
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

