// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTeam extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the team name can be modified.
   * 
   * @example
   * false
   */
  allowUpdateTeamName?: boolean;
  /**
   * @remarks
   * The time when the team was created.
   * 
   * @example
   * 2025-05-23T11:26:25Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Open team
   */
  description?: string;
  plan?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The status of the team.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @remarks
   * The name of the team.
   * 
   * @example
   * dev
   */
  teamName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12345
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      allowUpdateTeamName: 'allowUpdateTeamName',
      createdTime: 'createdTime',
      description: 'description',
      plan: 'plan',
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

