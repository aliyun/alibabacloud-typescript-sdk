// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorksByWorkspaceResponseBodyResultDataDirectory } from "./QueryWorksByWorkspaceResponseBodyResultDataDirectory";


export class QueryWorksByWorkspaceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The directory to which the work belongs.
   */
  directory?: QueryWorksByWorkspaceResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The timestamp of the creation of the work in milliseconds.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp of the modification of the work in milliseconds.
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * Nickname of the work modifier.
   * 
   * @example
   * Tom
   */
  modifyName?: string;
  /**
   * @remarks
   * The user ID of the work owner in the Quick BI.
   * 
   * @example
   * The name of the workspace to which the work belongs.
   */
  ownerId?: string;
  /**
   * @remarks
   * The nickname of the work owner.
   * 
   * @example
   * Li Si
   */
  ownerName?: string;
  /**
   * @remarks
   * Is it public
   * 
   * @example
   * true
   */
  publicFlag?: boolean;
  /**
   * @remarks
   * Deadline for the public release of the report
   * 
   * @example
   * 1721366354000
   */
  publicInvalidTime?: number;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * Status of dashboards, full-screen dashboards, spreadsheets. The default value of other work types is 1. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * *   Analysis: Ad hoc analysis
   * *   DATAFORM: form filling
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByWorkspaceResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

