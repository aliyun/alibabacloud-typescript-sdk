// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiDatasourceParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API data source.
   * 
   * This parameter is required.
   * 
   * @example
   * b66a66de51f24d149116c17718138194
   */
  apiId?: string;
  /**
   * @remarks
   * The configuration of API data parameters in the JSONArray format. You can modify a maximum of 10 parameters.
   * 
   * *   name: the name of a common parameter or a parameter in a query statement
   * *   value: the value of a common parameter or a parameter in a query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      parameters: 'Parameters',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      parameters: 'string',
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

