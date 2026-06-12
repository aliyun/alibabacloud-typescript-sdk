// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to filter results in a paged query.
   * 
   * @example
   * dh
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to return for a paged query.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If NextToken is empty, paged query starts from the beginning. Otherwise, paged query starts from the end of the previous query indicated by the token.
   * 
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The number of records to skip in a paged query.
   * 
   * @example
   * 1
   */
  skip?: number;
  /**
   * @remarks
   * The topic name.
   * 
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

