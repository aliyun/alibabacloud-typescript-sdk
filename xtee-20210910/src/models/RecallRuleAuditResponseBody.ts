// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallRuleAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4C7DC1C8-557F-5483-9E96-74D77A15EEB5
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   * 
   * @example
   * true
   */
  resultObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

