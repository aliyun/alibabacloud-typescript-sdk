// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPartInfoParallelSha1Ctx extends $dara.Model {
  h?: number[];
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

