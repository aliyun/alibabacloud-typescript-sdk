// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadUrlRequestPartInfoListParallelSha1Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to fifth 32-bit variables of the SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  h?: number[];
  /**
   * @remarks
   * The size of the file part. Unit: bytes. The value must be a multiple of 64. This parameter takes effect only if the parallel upload feature is enabled.
   * 
   * @example
   * 10240
   */
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

