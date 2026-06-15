// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the resource.
   * 
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * The name of the datasource.
   * 
   * This parameter is required.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * The datasource type. Valid values are:
   * 
   * ● Hologres
   * 
   * ● GraphCompute
   * 
   * ● Redis
   * 
   * ● MaxCompute
   * 
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * The URI of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the workspace. Call the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      type: 'Type',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

