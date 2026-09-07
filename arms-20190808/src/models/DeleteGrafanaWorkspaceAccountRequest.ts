// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGrafanaWorkspaceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1781058524719073
   */
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grafana-cn-zky4h2wey01
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
      accountId: 'AccountId',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
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

