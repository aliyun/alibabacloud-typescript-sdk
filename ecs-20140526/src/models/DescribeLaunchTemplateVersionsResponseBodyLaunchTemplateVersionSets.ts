// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet } from "./DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet";


export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets extends $dara.Model {
  launchTemplateVersionSet?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersionSet: 'LaunchTemplateVersionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersionSet: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateVersionSet)) {
      $dara.Model.validateArray(this.launchTemplateVersionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

