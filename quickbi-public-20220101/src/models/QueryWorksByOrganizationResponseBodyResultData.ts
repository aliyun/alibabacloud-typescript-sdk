// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorksByOrganizationResponseBodyResultDataDirectory } from "./QueryWorksByOrganizationResponseBodyResultDataDirectory";


export class QueryWorksByOrganizationResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Third-party embedding status. Possible values:
   * 
   * - 0: Embedding not enabled
   * - 1: Embedding enabled
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * Notes for the work.
   * 
   * @example
   * Attention
   */
  description?: string;
  /**
   * @remarks
   * Directory to which the work belongs.
   */
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  /**
   * @remarks
   * Timestamp (in milliseconds) when the work was created.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 作品修改的毫秒级时间戳。
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * 作品修改者的阿里云账户名。
   * 
   * @example
   * test
   */
  modifyName?: string;
  /**
   * @remarks
   * The UserID of the work\\"s owner in Quick BI.
   * 
   * @example
   * test
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work\\"s owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * Whether it is public
   * 
   * @example
   * true
   */
  publicFlag?: boolean;
  /**
   * @remarks
   * The expiration date for the report to be made public
   * 
   * @example
   * 1721366354000
   */
  publicInvalidTime?: number;
  /**
   * @remarks
   * The security policy for collaborative authorization of the work. Values:
   * - 0: Private
   * - 12: Authorize specific members
   * - 1 or 11: Authorize all space members
   * 
   * >- If you are using the old version of permissions, the returned value is 1.
   * >- If you are using the new version of permissions, the returned value is 11.
   * 
   * @example
   * 1
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Value range:
   * 
   * - 0: Unpublished
   * - 1: Published
   * - 2: Modified but not published
   * - 3: Offline
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
   * test
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Value range:
   * 
   * - DATAPRODUCT: Data portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * - dashboardOfflineQuery: Self-service data retrieval
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
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * test
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * test
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
      directory: QueryWorksByOrganizationResponseBodyResultDataDirectory,
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

