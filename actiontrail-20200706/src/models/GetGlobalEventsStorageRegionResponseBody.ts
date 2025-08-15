// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGlobalEventsStorageRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0474CD9D-DF37-55D4-8383-D978CFBE13A4
   */
  requestId?: string;
  /**
   * @remarks
   * The region where global events are stored.
   * 
   * Valid values:
   * 
   * *   ap-southeast-1
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the Singapore region
   * 
   *     <!-- -->
   * 
   * *   cn-hangzhou
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the China (Hangzhou) region
   * 
   *     <!-- -->
   * 
   * @example
   * cn-hangzhou
   */
  storageRegion?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageRegion: 'StorageRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

