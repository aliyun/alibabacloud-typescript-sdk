// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet } from "./DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet";


export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSets extends $dara.Model {
  launchTemplateSet?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateSet: 'LaunchTemplateSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateSet: { 'type': 'array', 'itemType': DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateSet)) {
      $dara.Model.validateArray(this.launchTemplateSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

