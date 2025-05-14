// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo } from "./SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo";
import { SearchMediaResponseBodyMediaInfoListAiDataAsrInfo } from "./SearchMediaResponseBodyMediaInfoListAiDataAsrInfo";
import { SearchMediaResponseBodyMediaInfoListAiDataOcrInfo } from "./SearchMediaResponseBodyMediaInfoListAiDataOcrInfo";


export class SearchMediaResponseBodyMediaInfoListAiData extends $dara.Model {
  /**
   * @remarks
   * The tags of the intelligent AI job.
   */
  aiLabelInfo?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo[];
  /**
   * @remarks
   * The information about audio files.
   */
  asrInfo?: SearchMediaResponseBodyMediaInfoListAiDataAsrInfo[];
  /**
   * @remarks
   * The subtitles.
   */
  ocrInfo?: SearchMediaResponseBodyMediaInfoListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      asrInfo: 'AsrInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo },
      asrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAsrInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataOcrInfo },
    };
  }

  validate() {
    if(Array.isArray(this.aiLabelInfo)) {
      $dara.Model.validateArray(this.aiLabelInfo);
    }
    if(Array.isArray(this.asrInfo)) {
      $dara.Model.validateArray(this.asrInfo);
    }
    if(Array.isArray(this.ocrInfo)) {
      $dara.Model.validateArray(this.ocrInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

