// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences } from "./SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences";


export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo extends $dara.Model {
  /**
   * @remarks
   * The category.
   */
  category?: string;
  /**
   * @remarks
   * The face ID.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  faceId?: string;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 10310250338
   */
  labelId?: string;
  /**
   * @remarks
   * The name of the entity.
   */
  labelName?: string;
  /**
   * @remarks
   * The type of the tag.
   */
  labelType?: string;
  /**
   * @remarks
   * The clips.
   */
  occurrences?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences[];
  /**
   * @remarks
   * The source.
   * 
   * @example
   * vision
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      faceId: 'FaceId',
      labelId: 'LabelId',
      labelName: 'LabelName',
      labelType: 'LabelType',
      occurrences: 'Occurrences',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      faceId: 'string',
      labelId: 'string',
      labelName: 'string',
      labelType: 'string',
      occurrences: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.occurrences)) {
      $dara.Model.validateArray(this.occurrences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

