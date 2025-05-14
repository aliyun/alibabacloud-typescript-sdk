// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasourceRequest extends $dara.Model {
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @remarks
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

