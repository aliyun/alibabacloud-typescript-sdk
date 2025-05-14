// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks } from "./SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks";


export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences extends $dara.Model {
  /**
   * @remarks
   * The text content.
   */
  content?: string;
  /**
   * @remarks
   * The fine-grained ID of the entity.
   * 
   * @example
   * 10310250338
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
   * The optimal face image encoded in Base64.
   * 
   * @example
   * 99C64F6287
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
   * 85010D1
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
   * The track sequence.
   */
  tracks?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks[];
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  clipId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      finegrainId: 'FinegrainId',
      finegrainName: 'FinegrainName',
      from: 'From',
      image: 'Image',
      score: 'Score',
      tableBatchSeqId: 'TableBatchSeqId',
      to: 'To',
      tracks: 'Tracks',
      clipId: 'clipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      finegrainId: 'string',
      finegrainName: 'string',
      from: 'number',
      image: 'string',
      score: 'number',
      tableBatchSeqId: 'string',
      to: 'number',
      tracks: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks },
      clipId: 'string',
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

