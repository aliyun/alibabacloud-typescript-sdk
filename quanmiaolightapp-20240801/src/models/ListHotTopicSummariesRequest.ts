// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicSummariesRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  category?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * JlroP3CjgQh5PQDlH3ArzADkBTPZgVqo+64jhZRglNq0mEYoV5SlGb/Juvo8CdfYE9rlwEr2pIJQwdaYotak9g==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

