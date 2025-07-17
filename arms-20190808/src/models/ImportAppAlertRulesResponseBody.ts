// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAppAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * [12174**]
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

