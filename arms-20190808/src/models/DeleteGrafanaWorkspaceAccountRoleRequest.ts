// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGrafanaWorkspaceAccountRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1844567291383820
   */
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-lbj3j3gfy04
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      orgId: 'OrgId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      grafanaWorkspaceId: 'string',
      orgId: 'number',
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

