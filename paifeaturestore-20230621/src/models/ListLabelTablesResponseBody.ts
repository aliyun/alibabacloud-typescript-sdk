// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelTablesResponseBodyLabelTables extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * datasource1
   */
  datasourceName?: string;
  /**
   * @remarks
   * The time when the label table was created. The time is displayed in the ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the label table was last modified. The time is displayed in the ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the label table.
   * 
   * @example
   * 3
   */
  labelTableId?: string;
  /**
   * @remarks
   * The name of the label table.
   * 
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner.
   * 
   * @example
   * 123214213214
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
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

export class ListLabelTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of label tables.
   */
  labelTables?: ListLabelTablesResponseBodyLabelTables[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of label tables.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelTables: 'LabelTables',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTables: { 'type': 'array', 'itemType': ListLabelTablesResponseBodyLabelTables },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelTables)) {
      $dara.Model.validateArray(this.labelTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

