// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApprovePolarClawDevicePairRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The pairing request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * req-abc-123
   */
  pairRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      pairRequestId: 'PairRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      pairRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

