// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoResponseBodyData extends $dara.Model {
  fileName?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

