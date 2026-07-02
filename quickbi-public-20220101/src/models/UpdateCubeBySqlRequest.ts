// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCubeBySqlRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The custom SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from sdsd
   */
  customSql?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  /**
   * @remarks
   * The placeholder parameters. For more information, see the supplementary description below.
   * 
   * @example
   * [
   *     {
   *         "name": "test",
   *         "style": "placeholder",
   *         "type": "string"
   *     }
   * ]
   */
  placeholders?: string;
  /**
   * @remarks
   * The Quick BI UserId of a user who has permissions to create datasets. This is not your Alibaba Cloud account ID. Call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=api-workbench.api_explorer.0.0.672f50daGq9ooV&params=%7B%7D&tab=DOC&sdkStyle=old&RegionId=cn-hangzhou) operation to obtain the UserId.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  userId?: string;
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
      cubeId: 'CubeId',
      customSql: 'CustomSql',
      dsId: 'DsId',
      placeholders: 'Placeholders',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      customSql: 'string',
      dsId: 'string',
      placeholders: 'string',
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

