// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCubeBySqlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the custom dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  caption?: string;
  /**
   * @remarks
   * The custom SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from qqq
   */
  customSql?: string;
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
   * The ID of a Quick BI user with permissions to create datasets. This is not your Alibaba Cloud account ID. Call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=api-workbench.api_explorer.0.0.672f50daGq9ooV\\&params=%7B%7D\\&tab=DOC\\&sdkStyle=old\\&RegionId=cn-hangzhou) operation to obtain the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * asdaf-asda*****asd
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customSql: 'CustomSql',
      dsId: 'DsId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customSql: 'string',
      dsId: 'string',
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

