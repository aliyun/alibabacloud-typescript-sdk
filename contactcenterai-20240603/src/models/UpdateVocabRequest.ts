// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateVocabRequestWordWeightList } from "./UpdateVocabRequestWordWeightList";


export class UpdateVocabRequest extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsvsv***dsvv
   */
  vocabularyId?: string;
  wordWeightList?: UpdateVocabRequestWordWeightList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jhfr****w8v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': UpdateVocabRequestWordWeightList },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

