// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the data sources that you want to import. The Name, DataSourceType, SubType, Description, Content, and EnvType parameters are required. For more information about the parameters, see [CreateDataSource](https://help.aliyun.com/document_detail/211429.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"SubType":"","DataSourceType":"mysql","EnvType":1,"Name":"mysql_dms2","Description":"aaa","Content":"{\\"database\\":\\"mysql_chengdu_old\\",\\"password\\":\\"***\\",\\"instanceName\\":\\"rm-2vcrckb37163g7l3w\\",\\"regionId\\":\\"cn-chengdu\\",\\"tag\\":\\"rds\\",\\"rdsOwnerId\\":\\"333\\",\\"username\\":\\"mysql_chengdu2\\"}"},{"SubType":"","DataSourceType":"mysql","EnvType":1,"Name":"mysql_dms2","Description":"aaa","Content":"{\\"database\\":\\"mysql_chengdu_old\\",\\"password\\":\\"***\\",\\"instanceName\\":\\"rm-2vcrckb37163g7l3w\\",\\"regionId\\":\\"cn-chengdu\\",\\"tag\\":\\"rds\\",\\"rdsOwnerId\\":\\"143\\",\\"username\\":\\"mysql_chengdu2\\"}"}]
   */
  dataSources?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

