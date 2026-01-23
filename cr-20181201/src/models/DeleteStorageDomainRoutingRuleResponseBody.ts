// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStorageDomainRoutingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * D4978DCC-ECBD-40B0-A714-EE6959B*****
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

