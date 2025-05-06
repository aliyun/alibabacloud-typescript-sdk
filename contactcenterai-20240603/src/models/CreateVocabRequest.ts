// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVocabRequestWordWeightList } from "./CreateVocabRequestWordWeightList";


export class CreateVocabRequest extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeightList?: CreateVocabRequestWordWeightList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-9****me1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      wordWeightList: 'wordWeightList',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      wordWeightList: { 'type': 'array', 'itemType': CreateVocabRequestWordWeightList },
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

