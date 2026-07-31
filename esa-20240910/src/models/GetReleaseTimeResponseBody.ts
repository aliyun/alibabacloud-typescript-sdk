// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReleaseTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scheduled release time.
   * 
   * @example
   * 2026-01-02T06:00:00Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6abd807e-ed2a-****-ac54-ac38a62472e6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      releaseTime: 'ReleaseTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseTime: 'string',
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

