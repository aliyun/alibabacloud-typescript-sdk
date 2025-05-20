// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvestigationInfoVideoDetailBlockFrames } from "./InvestigationInfoVideoDetailBlockFrames";


export class InvestigationInfoVideoDetail extends $dara.Model {
  blockFrames?: InvestigationInfoVideoDetailBlockFrames[];
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'block_frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': InvestigationInfoVideoDetailBlockFrames },
    };
  }

  validate() {
    if(Array.isArray(this.blockFrames)) {
      $dara.Model.validateArray(this.blockFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

