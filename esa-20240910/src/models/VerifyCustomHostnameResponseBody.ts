// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCustomHostnameResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
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

