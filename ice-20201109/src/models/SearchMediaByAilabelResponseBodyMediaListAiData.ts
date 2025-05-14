// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo } from "./SearchMediaByAilabelResponseBodyMediaListAiDataAiLabelInfo";
import { SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo } from "./SearchMediaByAilabelResponseBodyMediaListAiDataAsrInfo";
import { SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo } from "./SearchMediaByAilabelResponseBodyMediaListAiDataOcrInfo";


export class SearchMediaByAILabelResponseBodyMediaListAiData extends $dara.Model {
  /**
   * @remarks
   * The tags of the AI job.
   */
  aiLabelInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo[];
  /**
   * @remarks
   * The information about audio files.
   */
  asrInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo[];
  /**
   * @remarks
   * The information about subtitle files.
   */
  ocrInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      asrInfo: 'AsrInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo },
      asrInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo },
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

