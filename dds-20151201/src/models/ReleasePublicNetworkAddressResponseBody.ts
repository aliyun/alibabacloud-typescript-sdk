// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicNetworkAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D6AFE36-1AF5-4DE4-A954-672159D4CC69
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

