// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos } from "./RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos";


export class RunDocQaResponseBodyPayloadOutputMediaUrlList extends $dara.Model {
  clipInfos?: RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos[];
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/2775676850/O1CN01kdeffE20TM0E7wvpq_!!2775676850.jpg_q60.jpg
   */
  fileUrl?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfos: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos },
      fileUrl: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

