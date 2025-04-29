// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDedicatedBlockStorageClusterDiskThroughputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
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

