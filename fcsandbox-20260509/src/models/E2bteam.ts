// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTeam extends $dara.Model {
  allowUpdateTeamName?: boolean;
  createdTime?: string;
  description?: string;
  resourceGroupID?: string;
  status?: string;
  teamID?: string;
  teamName?: string;
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      allowUpdateTeamName: 'allowUpdateTeamName',
      createdTime: 'createdTime',
      description: 'description',
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

