// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrafanaWorkspaceAccountRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-qzm4mumf401
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
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

