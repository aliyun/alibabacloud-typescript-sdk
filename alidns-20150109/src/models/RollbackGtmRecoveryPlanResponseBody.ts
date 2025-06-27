// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackGtmRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
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

