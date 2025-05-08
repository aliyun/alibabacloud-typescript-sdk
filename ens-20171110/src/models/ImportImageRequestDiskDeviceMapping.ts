// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @example
   * www-cn
   */
  OSSBucket?: string;
  /**
   * @example
   * image-bucket
   */
  OSSObject?: string;
  /**
   * @example
   * cn-beijing
   */
  OSSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
      OSSRegion: 'OSSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
      OSSObject: 'string',
      OSSRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

