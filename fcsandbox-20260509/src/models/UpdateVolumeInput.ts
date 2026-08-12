// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVolumeInput extends $dara.Model {
  status?: string;
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

