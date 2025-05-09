// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec extends $dara.Model {
  /**
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @example
   * 1
   */
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

