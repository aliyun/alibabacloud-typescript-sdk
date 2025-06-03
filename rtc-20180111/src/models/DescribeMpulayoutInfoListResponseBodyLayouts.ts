// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMPULayoutInfoListResponseBodyLayoutsLayout } from "./DescribeMpulayoutInfoListResponseBodyLayoutsLayout";


export class DescribeMPULayoutInfoListResponseBodyLayouts extends $dara.Model {
  layout?: DescribeMPULayoutInfoListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

