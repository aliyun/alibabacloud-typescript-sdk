// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVersionDownloadUrlRequest extends $dara.Model {
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

