// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserViewMetricsRequest extends $dara.Model {
  order?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: string;
  sortBy?: string;
  timeStep?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      timeStep: 'TimeStep',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      timeStep: 'string',
      userId: 'string',
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

