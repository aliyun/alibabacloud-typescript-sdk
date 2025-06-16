// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCommonBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B400EF57-60E3-4D61-B8FB-7FA8F72DF5A6
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

