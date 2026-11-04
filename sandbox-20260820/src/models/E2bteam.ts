// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTeam extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the team name can be modified. The default team does not allow modification.
   */
  allowUpdateTeamName?: boolean;
  /**
   * @remarks
   * The creation time of the team in UTC, in RFC 3339 format.
   * 
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The team description.
   * 
   * @example
   * Sandbox environment for the algorithm team
   */
  description?: string;
  /**
   * @remarks
   * The team plan specification. Valid values:
   * - eco: economy.
   * - std: standard.
   * - pro: professional.
   * - ent: enterprise.
   * 
   * @example
   * std
   */
  plan?: string;
  /**
   * @remarks
   * Indicates whether the current caller has read-only access to the team. If the value is true, the team configuration cannot be modified.
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the team belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The team status. Valid values:
   * - active: Normal.
   * - deleting: Being deleted.
   * - delete_failed: Failed to delete.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the team to which the resource belongs, in UUID format.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @remarks
   * The user ID of the team creator, in UUID format.
   * 
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

