// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsRequest extends $dara.Model {
  /**
   * @example
   * dh
   */
  keyword?: string;
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * false
   */
  pure?: boolean;
  /**
   * @example
   * 1
   */
  skip?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      pure: 'Pure',
      skip: 'Skip',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
      pure: 'boolean',
      skip: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

