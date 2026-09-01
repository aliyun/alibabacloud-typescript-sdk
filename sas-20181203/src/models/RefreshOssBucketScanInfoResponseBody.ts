// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshOssBucketScanInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The China (Hangzhou) region generates a unique identifier for the request, which can be used for troubleshooting.
   * 
   * @example
   * CE290C1F-4B7D-5024-9D2F-E26D7B08****
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

