// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTeam extends $dara.Model {
  allowUpdateTeamName?: boolean;
  /**
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdTime?: string;
  /**
   * @example
   * 算法团队的沙箱环境
   */
  description?: string;
  /**
   * @example
   * std
   */
  plan?: string;
  readOnly?: boolean;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @example
   * 9c1d4e72-****
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      allowUpdateTeamName: 'allowUpdateTeamName',
      createdTime: 'createdTime',
      description: 'description',
      plan: 'plan',
      readOnly: 'readOnly',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      teamID: 'teamID',
      teamName: 'teamName',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUpdateTeamName: 'boolean',
      createdTime: 'string',
      description: 'string',
      plan: 'string',
      readOnly: 'boolean',
      resourceGroupID: 'string',
      status: 'string',
      teamID: 'string',
      teamName: 'string',
      userID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

