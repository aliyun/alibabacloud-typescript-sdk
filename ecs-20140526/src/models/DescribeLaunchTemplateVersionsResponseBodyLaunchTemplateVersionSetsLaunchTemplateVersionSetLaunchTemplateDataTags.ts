// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag } from "./DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag";


export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags extends $dara.Model {
  instanceTag?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag[];
  static names(): { [key: string]: string } {
    return {
      instanceTag: 'InstanceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTag: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTag)) {
      $dara.Model.validateArray(this.instanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

