// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourcesResponseBodyDatasources extends $dara.Model {
  /**
   * @remarks
   * The resource configuration.
   * 
   * @example
   * {"address": ""}
   */
  config?: string;
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
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * - Hologres
   * 
   * - Redis
   * 
   * - MaxCompute
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 32324
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      datasourceId: 'DatasourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      type: 'Type',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      datasourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      type: 'string',
      uri: 'string',
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

export class ListDatasourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data sources.
   */
  datasources?: ListDatasourcesResponseBodyDatasources[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of data sources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasources: 'Datasources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasources: { 'type': 'array', 'itemType': ListDatasourcesResponseBodyDatasources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasources)) {
      $dara.Model.validateArray(this.datasources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

