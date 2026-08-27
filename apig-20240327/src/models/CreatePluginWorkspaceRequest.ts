// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-custom-plugin
   */
  repoName?: string;
  /**
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

