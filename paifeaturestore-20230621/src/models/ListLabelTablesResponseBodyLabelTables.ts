// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelTablesResponseBodyLabelTables extends $dara.Model {
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @example
   * datasource1
   */
  datasourceName?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 3
   */
  labelTableId?: string;
  /**
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @example
   * 123214213214
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelTableId: 'LabelTableId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelTableId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

