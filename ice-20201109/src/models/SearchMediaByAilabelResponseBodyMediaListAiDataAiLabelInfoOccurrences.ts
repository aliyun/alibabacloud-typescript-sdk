// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks } from "./SearchMediaByAilabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks";


export class SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrences extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 158730355E4B82257D8AA1583A58****
   */
  clipId?: string;
  /**
   * @remarks
   * The content of the text.
   */
  content?: string;
  /**
   * @remarks
   * The fine-grained ID of the entity.
   * 
   * @example
   * 103102503**
   */
  finegrainId?: string;
  /**
   * @remarks
   * The fine-grained name of the entity.
   */
  finegrainName?: string;
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The image that contains the most face information.
   * 
   * @example
   * https://service-****-public.oss-cn-hangzhou.aliyuncs.com/1563457****438522/service-image/f788974f-9595-43b2-a478-7c7a1afb****.jpg
   */
  image?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 0.75287705
   */
  score?: number;
  /**
   * @remarks
   * The sequence ID of the vector table.
   * 
   * @example
   * 85010D1**
   */
  tableBatchSeqId?: string;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 2.5
   */
  to?: number;
  /**
   * @remarks
   * The tracks.
   */
  tracks?: SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks[];
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      finegrainId: 'FinegrainId',
      finegrainName: 'FinegrainName',
      from: 'From',
      image: 'Image',
      score: 'Score',
      tableBatchSeqId: 'TableBatchSeqId',
      to: 'To',
      tracks: 'Tracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      finegrainId: 'string',
      finegrainName: 'string',
      from: 'number',
      image: 'string',
      score: 'number',
      tableBatchSeqId: 'string',
      to: 'number',
      tracks: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks },
    };
  }

  validate() {
    if(Array.isArray(this.tracks)) {
      $dara.Model.validateArray(this.tracks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

