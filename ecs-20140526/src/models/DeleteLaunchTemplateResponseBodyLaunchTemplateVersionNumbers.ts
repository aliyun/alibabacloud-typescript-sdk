// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLaunchTemplateResponseBodyLaunchTemplateVersionNumbers extends $dara.Model {
  versionNumbers?: number[];
  static names(): { [key: string]: string } {
    return {
      versionNumbers: 'versionNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionNumbers: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.versionNumbers)) {
      $dara.Model.validateArray(this.versionNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

