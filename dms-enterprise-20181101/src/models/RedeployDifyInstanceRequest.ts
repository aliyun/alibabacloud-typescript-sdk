// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployDifyInstanceRequest extends $dara.Model {
  clientToken?: string;
  dataRegion?: string;
  dryRun?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
      dryRun: 'DryRun',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataRegion: 'string',
      dryRun: 'string',
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

