// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpv6EgressOnlyRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DFEDBEE-E5AB-49E8-A2DC-CC114C67AF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

