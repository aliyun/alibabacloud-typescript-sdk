// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoSnapshotTaskStatusResponseBodyResultData extends $dara.Model {
  frameIndex?: number;
  frameTime?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      frameIndex: 'frame_index',
      frameTime: 'frame_time',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameIndex: 'number',
      frameTime: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

