// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoSnapshotTaskRequestInput extends $dara.Model {
  content?: string;
  fileName?: string;
  oss?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'file_name',
      oss: 'oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      oss: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

