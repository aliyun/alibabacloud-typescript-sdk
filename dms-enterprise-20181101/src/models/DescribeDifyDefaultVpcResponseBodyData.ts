// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyDefaultVpcResponseBodyData extends $dara.Model {
  defaultVpcId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVpcId: 'DefaultVpcId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVpcId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

