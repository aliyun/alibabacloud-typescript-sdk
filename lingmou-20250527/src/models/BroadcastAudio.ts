// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastAudio extends $dara.Model {
  audioLength?: number;
  createTime?: string;
  id?: string;
  modifiedTime?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      audioLength: 'audioLength',
      createTime: 'createTime',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLength: 'number',
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

