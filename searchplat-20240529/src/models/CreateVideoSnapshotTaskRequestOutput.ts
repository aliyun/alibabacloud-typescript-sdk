// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoSnapshotTaskRequestOutput extends $dara.Model {
  oss?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      oss: 'oss',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

