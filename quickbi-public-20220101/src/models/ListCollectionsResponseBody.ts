// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the favorite record.
   * 
   * @example
   * 12373
   */
  favoriteId?: number;
  /**
   * @remarks
   * The user ID of the work owner. This refers to the UserID in Quick BI, not the Alibaba Cloud UID.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * test
   */
  worksName?: string;
  /**
   * @remarks
   * The type of the work. Possible values:
   * 
   * - DATAPRODUCT: Data Portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * - dataForm: Data Entry Form
   * - dashboardOfflineQuery: Self-service Data Extraction
   * 
   * @example
   * dashboardOfflineQuery
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace Name.
   * 
   * @example
   * test
   */
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

export class ListCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 162A632E-0A88-51CF-98F8-94FDEE82DB7D
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the list of reports favored by the user.
   */
  result?: ListCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The primary key ID of the favorite record.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectionsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

