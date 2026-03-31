// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemediationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * crr-909ba2d4716700eb****
   */
  remediationId?: string;
  /**
   * @remarks
   * The request ID.
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

