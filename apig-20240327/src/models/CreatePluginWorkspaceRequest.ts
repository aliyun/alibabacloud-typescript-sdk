// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway type. If this parameter is not specified, the server defaults to API.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * The Codeup organization ID for the Yunxiao DevOps organization. The frontend obtains this ID by parsing the ListPluginRepositories response or after creating an organization.
   * 
   * This parameter is required.
   * 
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * The repository name, which also serves as the English ID of the plugin. The backend does not validate the format. The frontend restricts the value to the regular expression /^(?![-.])[a-z0-9.-]{1,20}(?<![-.])$/, which allows 1 to 20 lowercase letters, digits, periods, or hyphens, and must not start or end with a period or a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * my-custom-plugin
   */
  repoName?: string;
  /**
   * @remarks
   * The workspace name, which is the Chinese name of the plugin. Note: This parameter is required. If it is omitted, the API returns a 400 InvalidParameter.IsEmpty error.
   * 
   * @example
   * my-plugin
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'gatewayType',
      organizationId: 'organizationId',
      repoName: 'repoName',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      organizationId: 'string',
      repoName: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

