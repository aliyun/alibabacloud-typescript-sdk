// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn } from "./UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn";
import { UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh } from "./UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh";


export class UpdateBootAndAntiUninstallPolicyRequestBlockContent extends $dara.Model {
  blockTextEn?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn;
  blockTextZh?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh,
    };
  }

  validate() {
    if(this.blockTextEn && typeof (this.blockTextEn as any).validate === 'function') {
      (this.blockTextEn as any).validate();
    }
    if(this.blockTextZh && typeof (this.blockTextZh as any).validate === 'function') {
      (this.blockTextZh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

