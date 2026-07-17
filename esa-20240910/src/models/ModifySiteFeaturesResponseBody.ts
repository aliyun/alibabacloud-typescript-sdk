// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySiteFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The site feature information that failed to be cleared.
   * 
   * @example
   * loadbalance
   */
  failedFeatures?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedFeatures: 'FailedFeatures',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFeatures: 'string',
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

