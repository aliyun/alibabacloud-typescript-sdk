// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamShrinkRequest extends $dara.Model {
  adminName?: string;
  clientToken?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  teamMembersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      teamMembersShrink: 'TeamMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      teamMembersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

