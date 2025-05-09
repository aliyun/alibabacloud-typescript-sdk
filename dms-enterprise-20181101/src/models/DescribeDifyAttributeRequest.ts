// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyAttributeRequest extends $dara.Model {
  appUuid?: string;
  clientToken?: string;
  dataRegion?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      clientToken: 'string',
      dataRegion: 'string',
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

