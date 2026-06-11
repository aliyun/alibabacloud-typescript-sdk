// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUserRolesByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Quick BI user. This is not your Alibaba Cloud account ID. You can call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=api-workbench.api_explorer.0.0.672f50daGq9ooV\\&params=%7B%7D\\&tab=DOC\\&sdkStyle=old\\&RegionId=cn-hangzhou) operation to obtain the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * afas-********asfasg
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

