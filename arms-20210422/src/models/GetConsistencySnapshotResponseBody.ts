// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsistencySnapshotResponseBody extends $dara.Model {
  consistencyResultJsonStr?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      consistencyResultJsonStr: 'ConsistencyResultJsonStr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistencyResultJsonStr: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

