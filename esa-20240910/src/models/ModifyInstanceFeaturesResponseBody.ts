// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The site feature configurations that failed to be modified.
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
   * 2430E05E-1340-5773-B5E1-B743929F46F2
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

