// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudNotePhrasesResponseBodyPhrasesWordWeights extends $dara.Model {
  /**
   * @remarks
   * The weight value.
   * 
   * @example
   * 0
   */
  weight?: number;
  /**
   * @remarks
   * The hotword.
   * 
   * @example
   * Apple
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
   * @remarks
   * The creation time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2025-03-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Fruit description
   */
  description?: string;
  /**
   * @remarks
   * The hotword list ID.
   * 
   * @example
   * 1qweadca332121212
   */
  id?: string;
  /**
   * @remarks
   * The hotword list name.
   * 
   * @example
   * Fruit
   */
  name?: string;
  /**
   * @remarks
   * The hotword weights.
   * 
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
  /**
   * @remarks
   * The hotword lists.
   */
  phrases?: DescribeCloudNotePhrasesResponseBodyPhrases[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3A26E1E3-3CBB-599E-AD68-CB78F5A42FA1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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

