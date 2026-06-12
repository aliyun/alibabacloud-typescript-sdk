// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @remarks
   * The time when the consumer group was created.
   * 
   * @example
   * 1724041098000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the consumer group.
   * 
   * @example
   * 270523390948438349
   */
  creator?: string;
  /**
   * @remarks
   * The consumer group name.
   * 
   * @example
   * consumer_group1
   */
  groupName?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The list of topics associated with the consumer group.
   */
  topicList?: string[];
  /**
   * @remarks
   * The time when the consumer group was last updated.
   * 
   * @example
   * 1724041098000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      groupName: 'GroupName',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      success: 'Success',
      topicList: 'TopicList',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      groupName: 'string',
      projectName: 'string',
      requestId: 'string',
      success: 'boolean',
      topicList: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

