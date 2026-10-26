// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationWorkspaceListResponseBodyResultDataWorkspaceExportConfig extends $dara.Model {
  /**
   * @remarks
   * The image processing method when exporting to Excel with formatting. This parameter takes effect only when configured at the organization level. Valid values:
   * - false: Image fields are not converted to images.
   * - true: Image fields are converted to images. The option is displayed on the report export page, and users must manually select it to convert to images.
   * 
   * @example
   * true
   */
  allowExcelImageFile?: boolean;
  /**
   * @remarks
   * Specifies whether to export data to Excel.
   * 
   * @example
   * true
   */
  dataExport?: boolean;
  /**
   * @remarks
   * The default export type. Valid values: true (with formatting) and false (without formatting).
   * 
   * @example
   * true
   */
  defaultExportType?: boolean;
  /**
   * @remarks
   * The master switch for export. If this parameter is set to false, the following configurations do not take effect.
   * 
   * @example
   * true
   */
  exportMainSwitch?: boolean;
  /**
   * @remarks
   * Specifies whether to export to the local device.
   * 
   * @example
   * true
   */
  exportToLocal?: boolean;
  /**
   * @remarks
   * Specifies whether to support exporting public links of the content.
   * 
   * @example
   * true
   */
  exportToPublicWork?: boolean;
  /**
   * @remarks
   * Specifies whether to export to the server.
   * 
   * @example
   * true
   */
  exportToServer?: boolean;
  /**
   * @remarks
   * Specifies whether to export images.
   * 
   * @example
   * true
   */
  imageExport?: boolean;
  /**
   * @remarks
   * Specifies whether to export to PDF.
   * 
   * @example
   * true
   */
  pdfExport?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowExcelImageFile: 'AllowExcelImageFile',
      dataExport: 'DataExport',
      defaultExportType: 'DefaultExportType',
      exportMainSwitch: 'ExportMainSwitch',
      exportToLocal: 'ExportToLocal',
      exportToPublicWork: 'ExportToPublicWork',
      exportToServer: 'ExportToServer',
      imageExport: 'ImageExport',
      pdfExport: 'PdfExport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExcelImageFile: 'boolean',
      dataExport: 'boolean',
      defaultExportType: 'boolean',
      exportMainSwitch: 'boolean',
      exportToLocal: 'boolean',
      exportToPublicWork: 'boolean',
      exportToServer: 'boolean',
      imageExport: 'boolean',
      pdfExport: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the content can be made public. Valid values:
   * 
   * - true: Public.
   * - false: Not public.
   * 
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @remarks
   * Indicates whether the content can be shared with authorization. Valid values:
   * 
   * - true: Authorized.
   * - false: Not authorized.
   * 
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @remarks
   * The time when the workspace was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @remarks
   * The Quick BI user ID of the creator.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the creator.
   * 
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @remarks
   * The time when the workspace was last modified. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The Quick BI user ID of the modifier.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the modifier.
   * 
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @remarks
   * The ID of the organization to which the workspace belongs.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @remarks
   * The Quick BI user ID of the workspace owner.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the workspace owner.
   * 
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * The Quick BI account name of the workspace owner.
   * 
   * @example
   * test
   */
  realOwnerAccountName?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * This workspace is a test workspace
   */
  workspaceDescription?: string;
  /**
   * @remarks
   * The workspace export configuration.
   */
  workspaceExportConfig?: QueryOrganizationWorkspaceListResponseBodyResultDataWorkspaceExportConfig;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Test workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublishOperation: 'AllowPublishOperation',
      allowShareOperation: 'AllowShareOperation',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserAccountName: 'CreateUserAccountName',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      modifyUserAccountName: 'ModifyUserAccountName',
      organizationId: 'OrganizationId',
      owner: 'Owner',
      ownerAccountName: 'OwnerAccountName',
      realOwnerAccountName: 'RealOwnerAccountName',
      workspaceDescription: 'WorkspaceDescription',
      workspaceExportConfig: 'WorkspaceExportConfig',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublishOperation: 'boolean',
      allowShareOperation: 'boolean',
      createTime: 'string',
      createUser: 'string',
      createUserAccountName: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      modifyUserAccountName: 'string',
      organizationId: 'string',
      owner: 'string',
      ownerAccountName: 'string',
      realOwnerAccountName: 'string',
      workspaceDescription: 'string',
      workspaceExportConfig: QueryOrganizationWorkspaceListResponseBodyResultDataWorkspaceExportConfig,
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.workspaceExportConfig && typeof (this.workspaceExportConfig as any).validate === 'function') {
      (this.workspaceExportConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of workspaces.
   */
  data?: QueryOrganizationWorkspaceListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryOrganizationWorkspaceListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The paginated result of the workspace list. The detailed information of the workspaces is stored in the Data response parameter.
   */
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
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
      result: QueryOrganizationWorkspaceListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

