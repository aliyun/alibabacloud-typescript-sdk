// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGrafanaWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The description of the workspace.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * grafana-cn-4xl3g******
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * testGrafana
   */
  grafanaWorkspaceName?: string;
  /**
   * @remarks
   * The region ID. Default value: `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      description: 'Description',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      grafanaWorkspaceName: 'GrafanaWorkspaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      description: 'string',
      grafanaWorkspaceId: 'string',
      grafanaWorkspaceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

