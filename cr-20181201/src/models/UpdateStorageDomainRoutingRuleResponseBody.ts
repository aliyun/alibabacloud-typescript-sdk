// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStorageDomainRoutingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D4978DCC-ECBD-40B0-A714-EE6959*****
   */
  requestId?: string;
  /**
   * @remarks
   * Request status ID
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

