// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes } from "./DescribeMpulayoutInfoListResponseBodyLayoutsLayoutPanesPanes";


export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes extends $dara.Model {
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

