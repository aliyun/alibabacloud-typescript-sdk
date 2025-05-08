// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTestCaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The test case Id
   * 
   * @example
   * stc-5ba03a6a9a2746be8739
   */
  testCaseId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      testCaseId: 'TestCaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      testCaseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

