// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGlobalEventsStorageRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The region where you want to store global events.
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
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  storageRegion?: string;
  static names(): { [key: string]: string } {
    return {
      storageRegion: 'StorageRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

