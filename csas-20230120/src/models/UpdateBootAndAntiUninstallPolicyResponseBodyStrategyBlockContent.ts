// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn } from "./UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn";
import { UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh } from "./UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh";


export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  blockTextEn?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
  blockTextZh?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh,
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

