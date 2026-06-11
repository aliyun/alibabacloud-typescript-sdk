// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * st_trd_user_purchase_day_inc
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the destination folder.
   * 
   * @example
   * asah-fsdfsf*****92342
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  userDefineCubeName?: string;
  /**
   * @remarks
   * The user ID of a Quick BI user who has permissions to create datasets. This is not your Alibaba Cloud account ID. To obtain the user ID, call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=api-workbench.api_explorer.0.0.672f50daGq9ooV\\&params=%7B%7D\\&tab=DOC\\&sdkStyle=old\\&RegionId=cn-hangzhou) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      tableName: 'TableName',
      targetDirectoryId: 'TargetDirectoryId',
      userDefineCubeName: 'UserDefineCubeName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      tableName: 'string',
      targetDirectoryId: 'string',
      userDefineCubeName: 'string',
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

