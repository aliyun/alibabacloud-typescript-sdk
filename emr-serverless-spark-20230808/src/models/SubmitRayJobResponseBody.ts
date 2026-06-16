// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRayJobResponseBody extends $dara.Model {
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @example
   * rj-k7nm8ahl5te4tg91
   */
  submissionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      submissionId: 'submissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      submissionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

