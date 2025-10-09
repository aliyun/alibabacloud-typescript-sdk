// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

