// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataSourceShareRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source that you want to share.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_name
   */
  datasourceName?: string;
  /**
   * @remarks
   * The environment in which the data source is used. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the data source belongs. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The DataWorks workspace to which you want to share the data source. If you configure this parameter, all members of the specified DataWorks workspace can view and use the data source. The value of this parameter is a JSON array. Example: [{"projectId":1000,"permission":"WRITE","sharedName":"PX_DATAHUB1.shared_name"}], Parameter description:
   * 
   * *   projectId: the ID of the DataWorks workspace to which you want to share the data source.
   * *   permission: the mode in which the data source is shared. Valid values: READ and WRITE. The value READ indicates that all members of the specified workspace can read data from the data source, but cannot modify the data. The value WRITE indicates that all members of the specified workspace can modify the data in the data source.
   * *   sharedName: the name of the data source that you want to share.
   * 
   * @example
   * [{"projectId":1000,"permission":"WRITE","sharedName":"PX_DATAHUB1.shared_name"}]
   */
  projectPermissions?: string;
  /**
   * @remarks
   * The user to whom you want to share the data source. If you configure this parameter, the specified user can view or use the data source. The value of this parameter is a JSON array. Example: [{"projectId":10000,"users":[{"userId":"276184575345452131","permission":"WRITE"}],"sharedName":"PX_DATAHUB1.shared_name"}], Parameter description:
   * 
   * *   projectId: the ID of the DataWorks workspace. If you configure the UserPermissions parameter, the specified user can view or use the data source only in the specified DataWorks workspace.
   * *   userId: the ID of the user to whom you want to share the data source.
   * *   permission: the mode in which the data source is shared. Valid values: READ and WRITE. The value READ indicates that the specified user can read data from the data source, but cannot modify the data. The value WRITE indicates that the specified user can modify the data in the data source.
   * *   sharedName: the name of the data source that you want to share.
   * 
   * If the ProjectPermissions and UserPermissions parameters are both left empty, the specified data source is not shared to any DataWorks workspace or user. If neither of the parameters is left empty, both parameters take effect.
   * 
   * @example
   * [{"projectId":10000,"users":[{"userId":"276184575345452131","permission":"WRITE"}],"sharedName":"PX_DATAHUB1.shared_name"}]
   */
  userPermissions?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      projectId: 'ProjectId',
      projectPermissions: 'ProjectPermissions',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      projectId: 'number',
      projectPermissions: 'string',
      userPermissions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

