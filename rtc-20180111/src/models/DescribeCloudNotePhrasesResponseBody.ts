// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights extends $dara.Model {
  /**
   * @example
   * 0
   */
  weight?: number;
  /**
   * @example
   * 苹果
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeCloudNotePhrasesResponseBody extends $dara.Model {
  phrases?: DescribeCloudNotePhrasesResponseBodyPhrases[];
  /**
   * @remarks
   * Id of the request。
   * 
   * @example
   * 3A26E1E3-3CBB-599E-AD68-CB78F5A42FA1
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      phrases: 'Phrases',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrases: { 'type': 'array', 'itemType': DescribeCloudNotePhrasesResponseBodyPhrases },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

