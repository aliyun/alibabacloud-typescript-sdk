// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestDatabricksInfo extends $dara.Model {
  /**
   * @remarks
   * The token that is used to access Databricks.
   * 
   * @example
   * ******
   */
  accessToken?: string;
  /**
   * @remarks
   * The URL of the workspace.
   * 
   * @example
   * xxxxx
   */
  workspaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      workspaceURL: 'WorkspaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      workspaceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

