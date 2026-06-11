// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccelerationOfWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID in Quick BI. This is not your Alibaba Cloud account ID. Call the QueryUserInfoByAccount operation to obtain the user ID.
   * 
   * @example
   * 1***************139
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * The page number. If this parameter is left empty, the default value is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of rows on each page for a paged query.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      cubeName: 'CubeName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      cubeName: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

