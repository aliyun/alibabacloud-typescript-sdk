// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastVideo extends $dara.Model {
  alignmentFileURL?: string;
  captionURL?: string;
  coverURL?: string;
  createTime?: string;
  id?: string;
  modifiedTime?: string;
  name?: string;
  status?: string;
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentFileURL: 'alignmentFileURL',
      captionURL: 'captionURL',
      coverURL: 'coverURL',
      createTime: 'createTime',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      status: 'status',
      videoURL: 'videoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentFileURL: 'string',
      captionURL: 'string',
      coverURL: 'string',
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      videoURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

