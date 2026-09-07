// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGrafanaWorkspaceAccountRequest extends $dara.Model {
  /**
   * @example
   * notes
   */
  accountNotes?: string;
  /**
   * @example
   * 123456
   */
  accountPassword?: string;
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
   * 1449570186405787
   */
  aliyunUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-06f4xyxjo01
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * admin
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      accountNotes: 'AccountNotes',
      accountPassword: 'AccountPassword',
      aliyunLang: 'AliyunLang',
      aliyunUid: 'AliyunUid',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      orgId: 'OrgId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNotes: 'string',
      accountPassword: 'string',
      aliyunLang: 'string',
      aliyunUid: 'string',
      grafanaWorkspaceId: 'string',
      orgId: 'number',
      regionId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

