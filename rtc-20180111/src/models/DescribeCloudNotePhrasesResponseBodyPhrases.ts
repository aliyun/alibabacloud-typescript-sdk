// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights } from "./DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights";


export class DescribeCloudNotePhrasesResponseBodyPhrases extends $dara.Model {
  /**
   * @example
   * 2025-03-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @example
   * 水果描述
   */
  description?: string;
  /**
   * @example
   * 1qweadca332121212
   */
  id?: string;
  /**
   * @example
   * 水果
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeights?: DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      wordWeights: { 'type': 'array', 'itemType': DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

