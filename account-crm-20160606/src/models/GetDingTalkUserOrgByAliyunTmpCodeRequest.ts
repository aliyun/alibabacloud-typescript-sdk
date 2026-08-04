// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingTalkUserOrgByAliyunTmpCodeRequest extends $dara.Model {
  appName?: string;
  dingTalkChannel?: string;
  tmpCode?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dingTalkChannel: 'DingTalkChannel',
      tmpCode: 'TmpCode',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dingTalkChannel: 'string',
      tmpCode: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

