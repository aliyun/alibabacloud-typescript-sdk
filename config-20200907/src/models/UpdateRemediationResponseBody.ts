// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRemediationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the remediation setting.
   * 
   * @example
   * crr-7c2ba2d0236700a3****
   */
  remediationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7817373-78CB-4F9A-8AFA-E7A88E9D64A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
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

