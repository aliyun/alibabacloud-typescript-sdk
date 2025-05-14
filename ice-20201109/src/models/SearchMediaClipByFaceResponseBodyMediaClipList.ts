// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos } from "./SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos";


export class SearchMediaClipByFaceResponseBodyMediaClipList extends $dara.Model {
  /**
   * @remarks
   * The type of the character. Valid values: celebrity sensitive politician custom unknown
   * 
   * @example
   * celebrity
   */
  category?: string;
  /**
   * @remarks
   * The ID of the entity, which is the same as the entity ID returned in tag analysis.
   * 
   * @example
   * 1031025****
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the entity.
   */
  labelName?: string;
  /**
   * @remarks
   * The information about clips related to the face.
   */
  occurrencesInfos?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos[];
  /**
   * @remarks
   * The score of the clip. The value is of the Float type. The value is in the range of [0,1].
   * 
   * @example
   * 0.99041677
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      entityId: 'EntityId',
      labelName: 'LabelName',
      occurrencesInfos: 'OccurrencesInfos',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      entityId: 'string',
      labelName: 'string',
      occurrencesInfos: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos },
      score: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.occurrencesInfos)) {
      $dara.Model.validateArray(this.occurrencesInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

