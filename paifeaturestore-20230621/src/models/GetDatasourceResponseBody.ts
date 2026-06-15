// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasourceResponseBody extends $dara.Model {
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
   * The time the data source was created.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the data source was last updated.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
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
   * The ID of the request.
   * 
   * @example
   * AD7D9E95-BD31-53F2-B710-6C01866FCB05
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
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
   * The URI of the resource.
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
   * 32244
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      datasourceId: 'DatasourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
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
      requestId: 'string',
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

