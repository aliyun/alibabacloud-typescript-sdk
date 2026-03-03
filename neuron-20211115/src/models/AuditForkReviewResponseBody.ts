// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditForkReviewResponseBody extends $dara.Model {
  /**
   * @example
   * fsahkfkjsjfsdjlfalsf
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

