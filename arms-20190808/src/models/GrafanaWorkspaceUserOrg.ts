// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceUserOrg extends $dara.Model {
  /**
   * @example
   * 1
   */
  orgId?: number;
  /**
   * @example
   * main org
   */
  orgName?: string;
  /**
   * @example
   * admin
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'orgId',
      orgName: 'orgName',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'number',
      orgName: 'string',
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

