// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamInput extends $dara.Model {
  description?: string;
  resourceGroupID?: string;
  teamName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      resourceGroupID: 'resourceGroupID',
      teamName: 'teamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupID: 'string',
      teamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

