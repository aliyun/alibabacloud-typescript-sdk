// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the verification passed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

