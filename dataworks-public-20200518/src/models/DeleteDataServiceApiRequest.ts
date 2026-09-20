// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataService API.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  apiId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * You can obtain the workspace ID from PageResult.ProjectList[].ProjectId in the response of ListProjects.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click the username in the upper-right corner, and choose Menu > User Info to obtain the tenant ID.
   * 
   * You can also obtain the tenant ID from Data.Apis[].TenantId in the response of ListDataServiceApis.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

