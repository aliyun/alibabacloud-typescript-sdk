// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOssUrlResponseBodyData extends $dara.Model {
  downloadUrl?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      objectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

