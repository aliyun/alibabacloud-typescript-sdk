// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_name
   */
  datasourceName?: string;
  /**
   * @remarks
   * The environment in which the data source resides. Valid values:
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
      datasourceName: 'DatasourceName',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

