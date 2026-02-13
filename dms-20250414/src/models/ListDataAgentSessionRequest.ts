// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionRequest extends $dara.Model {
  /**
   * @example
   * 1770912000000
   */
  createEndTime?: number;
  /**
   * @example
   * 1770825600000
   */
  createStartTime?: number;
  /**
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * true
   */
  isSaved?: boolean;
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
   * myFavorite
   */
  queryType?: string;
  title?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'CreateEndTime',
      createStartTime: 'CreateStartTime',
      customAgentId: 'CustomAgentId',
      DMSUnit: 'DMSUnit',
      isSaved: 'IsSaved',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      customAgentId: 'string',
      DMSUnit: 'string',
      isSaved: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

