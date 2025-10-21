// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicRequest extends $dara.Model {
  /**
   * @example
   * asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @example
   * client_exposure_logs
   */
  topicName?: string;
  /**
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      topicName: 'TopicName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      topicName: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

