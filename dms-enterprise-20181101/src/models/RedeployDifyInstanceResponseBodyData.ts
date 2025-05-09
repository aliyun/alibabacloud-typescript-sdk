// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployDifyInstanceResponseBodyData extends $dara.Model {
  instanceId?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
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

