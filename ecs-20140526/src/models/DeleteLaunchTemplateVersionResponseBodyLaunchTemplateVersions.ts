// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion } from "./DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion";


export class DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions extends $dara.Model {
  launchTemplateVersion?: DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersion: 'LaunchTemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersion: { 'type': 'array', 'itemType': DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateVersion)) {
      $dara.Model.validateArray(this.launchTemplateVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

