// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway type. If you do not specify this parameter, the server uses API as the default value.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * The Codeup organization ID, which is the Yunxiao DevOps organization ID. The frontend obtains this ID by parsing ListPluginRepositories or after creating an organization.
   * 
   * This parameter is required.
   * 
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * The repository name, which also serves as the English ID of the plugin. The backend does not validate the format. The frontend restricts the format to the regular expression /^(?![-.])[a-z0-9.-]{1,20}(?<![-.])$/, which allows 1 to 20 lowercase letters, digits, periods, or hyphens, and cannot start or end with a period or a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * my-custom-plugin
   */
  repoName?: string;
  /**
   * @remarks
   * The workspace name, which is the Chinese name of the plugin. Note: This parameter is actually required. If it is omitted, the API returns a 400 InvalidParameter.IsEmpty error.
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

