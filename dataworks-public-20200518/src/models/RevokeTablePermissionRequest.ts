// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTablePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The operation permissions on the table that you want to revoke. Separate multiple operation permissions with commas (,).
   * 
   * Currently, only the Select, Describe, and Download operation permissions on MaxCompute tables can be revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * Select,Describe
   */
  actions?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that contains the table from which you want to revoke permissions. You can log on to the DataWorks console and go to the Workspace Settings page to obtain the name of the MaxCompute project associated with the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * aMaxcomputeProjectName
   */
  maxComputeProjectName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID from which you want to revoke table permissions. You can logon to the DataWorks console and go to the Security Settings page to obtain the account ID.
   * 
   * You only need to specify either this parameter or the RevokeUserName parameter. If both this parameter and the RevokeUserName parameter are specified in the parameter settings but have different values, the value of the RevokeUserId parameter takes precedence.
   * 
   * @example
   * 267842600408993176
   */
  revokeUserId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account from which you want to revoke table permissions. The account format is the same as the account format used in MaxCompute.
   * - An Alibaba Cloud account is in the format of ALIYUN$+account name.
   * - A RAM user is in the format of RAM$+account name.
   * 
   * You only need to specify either this parameter or the RevokeUserId parameter. If both this parameter and the RevokeUserId parameter are specified in the parameter settings but have different values, the value of the RevokeUserId parameter takes precedence.
   * 
   * @example
   * RAM$dataworks_3h1_1:stsramuser
   */
  revokeUserName?: string;
  /**
   * @remarks
   * The name of the MaxCompute table from which you want to revoke permissions. You can call the [SearchMetaTables](https://help.aliyun.com/document_detail/173919.html) operation to obtain the MaxCompute table name.
   * 
   * This parameter is required.
   * 
   * @example
   * aTableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the MaxCompute table belongs. You can log on to the DataWorks console and go to the Workspace Settings page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxComputeProjectName: 'MaxComputeProjectName',
      revokeUserId: 'RevokeUserId',
      revokeUserName: 'RevokeUserName',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      maxComputeProjectName: 'string',
      revokeUserId: 'string',
      revokeUserName: 'string',
      tableName: 'string',
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

