// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePushAppRequest extends $dara.Model {
  appId?: number;
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      downloadLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

