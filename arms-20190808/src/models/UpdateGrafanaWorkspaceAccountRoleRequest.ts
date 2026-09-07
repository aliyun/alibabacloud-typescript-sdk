// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGrafanaWorkspaceAccountRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1035730062732547
   */
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-ipp4v54ms01
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
   * Admin
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      orgId: 'OrgId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
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

