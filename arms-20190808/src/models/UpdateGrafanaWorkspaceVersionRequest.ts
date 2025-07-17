// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGrafanaWorkspaceVersionRequest extends $dara.Model {
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
   * The Grafana version.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.x
   */
  grafanaVersion?: string;
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
   * The region ID. Default value: cn-hangzhou.
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
      grafanaVersion: 'GrafanaVersion',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      grafanaVersion: 'string',
      grafanaWorkspaceId: 'string',
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

