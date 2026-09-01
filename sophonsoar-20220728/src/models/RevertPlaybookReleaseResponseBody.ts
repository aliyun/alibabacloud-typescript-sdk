// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertPlaybookReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. This ID is unique to the request and can be used for troubleshooting.
   * 
   * @example
   * B3FED5B9-190A-5952-93A4-24FBF0F0C573
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

