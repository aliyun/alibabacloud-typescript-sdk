// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 12373
   */
  favoriteId?: number;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  worksName?: string;
  /**
   * @example
   * dashboardOfflineQuery
   */
  worksType?: string;
  /**
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favoriteId: 'FavoriteId',
      ownerId: 'OwnerId',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favoriteId: 'number',
      ownerId: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

